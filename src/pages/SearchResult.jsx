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
import { products } from "../utils/carouselDummy";
import SearchBar from "../components/SearchBarComponent";
import { useState, useEffect } from "react";

function SearchResultPage() {
  const variant = { product: "product", course: "course" };
  //   const products = [];
  const currentLocation = useLocation().search;
  const queryParams = new URLSearchParams(currentLocation);
  const query = queryParams.get('name');

  const [category, setCategory] = useState('course');
  const [sortBy, setSortBy] = useState('newest');
  const [filterBy, setFilterBy] = useState('lth');
  const [filteredData, setFilteredData] = useState([]);

  const handleCategorychange = (state) => {
    setCategory(state);
  };

  const handleSortByChange = (state) => {
    setSortBy(state);
  };

  const handleFilterByChange = (state) => {
    setFilterBy(state);
  };

  // Effect to filter and sort data whenever category, sortBy, or filterBy changes
  useEffect(() => {
    // Filter products by category
    let filteredProducts = products.filter((item) => {
      return item.type === category; // Assuming your product object has a 'type' key
    });

    // Sort products based on sortBy selection
    if (sortBy === 'newest') {
      filteredProducts.sort((a, b) => new Date(b.date) - new Date(a.date)); // Sorting by date
    } else if (sortBy === 'oldest') {
      filteredProducts.sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    // Filter by price or other criteria based on filterBy
    if (filterBy === 'lth') {
      filteredProducts.sort((a, b) => a.price - b.price); // Low to High
    } else if (filterBy === 'htl') {
      filteredProducts.sort((a, b) => b.price - a.price); // High to Low
    }

    // Update the filtered data state
    setFilteredData(filteredProducts);
  }, [category, sortBy, filterBy]);

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
                  borderRight: { xs: "1px solid lightgrey", sm: "none" }, // Add right border to each item
                },
                "& > *:last-child": {
                  borderRight: "none", // Remove border from the last item
                },
              }}
            >
              <CategoryFilter category={category} handleChange={handleCategorychange}/>
              <Divider sx={{ display: { xs: "none", sm: "block" } }} />
              <SortByFilter sortBy={sortBy} handleChange={handleSortByChange} />
              <Divider sx={{ display: { xs: "none", sm: "block" } }} />
              <FilterByOther filterBy={filterBy} handleChange={handleFilterByChange}/>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, sm: 8 }} sx={{ width: "100%" }}>
            <SearchList dataObj={products} cardVariant={variant.product} />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default SearchResultPage;
