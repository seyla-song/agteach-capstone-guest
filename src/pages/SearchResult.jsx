import { useLocation } from "react-router-dom";
import CategoryFilter from "../components/SearchResult/CategoryFilter";
import SortByFilter from "../components/SearchResult/SortbyFilter";
import {
  Box,
  Container,
  Divider,
  Grid2 as Grid,
  Stack,
  Typography,
} from "@mui/material";
import FilterByOther from "../components/SearchResult/FilterByOther";
import SearchList from "../components/SearchResult/SearchList";
import SearchBar from "../components/SearchBarComponent";
import { useState, useEffect } from "react";
import { useGetAllProductQuery } from '../services/api/productApi'

function SearchResultPage() {
  const currentLocation = useLocation().search;
  const queryParams = new URLSearchParams(currentLocation);
  const query = queryParams.get('name');

  const { data, isLoading, isError, isSuccess, error } = useGetAllProductQuery(query);

  const [category, setCategory] = useState('product');
  const [sortBy, setSortBy] = useState('newest');
  const [filterByPrice, setFilterByPrice] = useState(false);
  const [filterByRuntime, setFilterByRuntime] = useState('none');
  const [rawData, setRawData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const handleCategoryChange = (state) => {
    if (state !== category) setCategory(state);
  };

  const handleSortByChange = (state) => {
    if (state !== sortBy) setSortBy(state);
  };

  const handleFilterByPriceChange = () => {
    setFilterByPrice(prev => !prev);
  };

  const handleFilterByRuntimeChange = (state) => {
    if (state === filterByRuntime) setFilterByRuntime('none');
    else setFilterByRuntime(state);
  };

  useEffect(() => {
    if (data) {
      setRawData(data.data || []);
    }
  }, [data]);

  useEffect(() => {
    let rawDataToFilter = [...rawData]; 
    
    // Sort products based on sortBy selection
    if (sortBy === 'newest') {
      rawDataToFilter.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)); // Assuming sorting by 'createdAt' for newest
    } else if (sortBy === 'oldest') {
      rawDataToFilter.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    } else if (sortBy === 'alphabet') {
      rawDataToFilter.sort((a, b) => a.name.localeCompare(b.name));
    } 

    // Filter by price
    if (filterByPrice) {
      rawDataToFilter.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    }

    // Filter by runtime if applicable
    if (category === 'course') {
      if (filterByRuntime === 'long') {
        rawDataToFilter.sort((a, b) => b.len - a.len);
      } else if (filterByRuntime === 'short') {
        rawDataToFilter.sort((a, b) => a.len - b.len);
      }
    }

    setFilteredData(rawDataToFilter);
  }, [category, sortBy, filterByPrice, filterByRuntime, rawData]);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1420px",
        display: "flex",
        flexDirection: "column",
        padding: 0,
        margin: {
          xs: "auto auto 50px auto",
          md: "100px auto 100px auto",
        },
      }}
    >
      <SearchBar
        backDrop={"primary"}
        searchLabel={"Learn Smarter, Learn Faster. AgTeach"}
        defaultSearchString={query}
      />
      <Box sx={{ mx: { xs: "5px", sm: 0 } }}>
        <Typography
          variant="h2"
          sx={{
            my: { xs: "20px", md: "69px" },
          }}
        >
          Search result{" "}
        </Typography>
        <Grid container spacing={1}>
          <Grid
            size={{ xs: 12, sm: 4 }}
            sx={{
              borderRight: { xs: 0, sm: `1px solid lightgrey` },
              pr: { xs: 0, sm: "10px" },
            }}
          >
            <Stack
              direction={{ xs: "row", sm: "column" }}
              gap={{ xs: 1, sm: 4 }}
              sx={{
                "& > *": {
                  borderRight: { xs: "1px solid lightgrey", sm: "none" },
                },
                "& > *:last-child": {
                  borderRight: "none",
                },
              }}
            >
              <CategoryFilter category={category} handleChange={handleCategoryChange} />
              <Divider sx={{ display: { xs: "none", sm: "block" } }} />
              <SortByFilter sortBy={sortBy} handleChange={handleSortByChange} />
              <Divider sx={{ display: { xs: "none", sm: "block" } }} />
              <FilterByOther
                filterByPrice={filterByPrice}
                handleFilterByPriceChange={handleFilterByPriceChange}
                filterByRuntime={filterByRuntime}
                handleFilterByRuntimeChange={handleFilterByRuntimeChange}
                context={category}
              />
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, sm: 8 }} sx={{ width: "100%" }}>
            <SearchList dataObj={filteredData} cardVariant={category} />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default SearchResultPage;
