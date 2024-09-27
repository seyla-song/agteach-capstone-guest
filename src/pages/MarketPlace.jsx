import {
  Container,
  Divider,
  Stack,
  Grid,
  Typography,
  Box,
} from "@mui/material";
import { useState, useEffect } from "react";
import Category from "../components/MaketPlace/Category";
import SortBy from "../components/MaketPlace/SortBy";
import FilterBy from "../components/MaketPlace/FilterBy";
import SearchBar from "../components/SearchBarComponent";
import SearchList from "../components/MaketPlace/SearchList";
import { products } from "../utils/carouselDummy";
import { useLocation } from "react-router";
import { useSearchProductQuery } from '../services/api/productApi'

/**
 * A React functional component that renders a marketplace page.
 *
 * The component includes a responsive layout with a search bar, a category filter,
 * a sort by filter, and a filter by filter. It also displays a list of products
 * with a carousel of recommended products.
 *
 * @return {JSX.Element} The JSX element representing the marketplace page.
 */
export default function MarketPlace() {
  const currentLocation = useLocation().search;
  const queryParams = new URLSearchParams(currentLocation);
  const query = queryParams.get('name') || '';
  const { data: productData, isLoading: isProductLoading, isError: isProductError, error: productError } = useSearchProductQuery(query);

  const [category, setCategory] = useState('plant');
  const [sortBy, setSortBy] = useState('newest');
  const [filterByPrice, setFilterByPrice] = useState(false);
  const [limit, setLimit] = useState(9);
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

  const handleLimitChange = () => {
    setLimit(limit + 9);
  };

  useEffect(() => {
    if (productData) {
      setRawData(productData.data);
    };
  }, [productData, query]);

  useEffect(() => {
    console.clear()
    let dataToFilter = [...rawData] || [];
    // filter by categories
    if (category === 'plant') dataToFilter = dataToFilter.filter((product) => product.categoryId === 1);
    else if (category === 'fertilizer') dataToFilter = dataToFilter.filter((product) => product.categoryId === 2);
    else if (category === 'seed') dataToFilter = dataToFilter.filter((product) => product.categoryId === 3);
    else if (category === 'tool') dataToFilter = dataToFilter.filter((product) => product.categoryId === 4);
      
    // Sort by both date and price
    dataToFilter.sort((a, b) => {
      if (sortBy === 'newest') {
        // Sort by date first (newest)
        const dateDiff = new Date(b.createdAt) - new Date(a.createdAt);
        if (dateDiff !== 0) return dateDiff;
      } else if (sortBy === 'oldest') {
        // Sort by date first (oldest)
        const dateDiff = new Date(a.createdAt) - new Date(b.createdAt);
        if (dateDiff !== 0) return dateDiff;
      } else if (sortBy === 'alphabet') {
        // Sort by name alphabetically
        const nameDiff = a.name.localeCompare(b.name);
        if (nameDiff !== 0) return nameDiff;
      }

      // If filterByPrice is active, sort by price after sorting by date/name
      if (filterByPrice) {
        const priceA = parseFloat(a.price) || 0;
        const priceB = parseFloat(b.price) || 0;
        return priceA - priceB; // Sort by lowest price
      }

      return 0; // If no price or date difference, keep original order
    });

    setFilteredData(dataToFilter)
  }, [rawData, category, sortBy, filterByPrice, limit]);

  let content;

  if (isProductLoading) { 
    content = <div style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Loading...</div>
  }
  else if (productData.results === 0) content = <div style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>No results were found!</div>
  else if (isProductError) content = <div style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Something went wrong. please try again later!</div>
  else if (productData) content = <SearchList dataObj={filteredData} cardVariant={'product'} limit={limit} handleLimitChange={handleLimitChange}/>  
  
  return (
    <>
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "1420px",
          margin: {
            xs: "30px auto 50px auto",
            md: "50px auto 100px auto",
          },
        }}
      >
        <Grid container>
          <Grid
            item
            xs={12}
            sm={3}
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
              <Category category={category} handleChange={handleCategoryChange}/>
              <Divider sx={{ display: { xs: "none", sm: "block" } }} />
              <SortBy sortBy={sortBy} handleChange={handleSortByChange}/>
              <Divider sx={{ display: { xs: "none", sm: "block" } }} />
              <FilterBy filterBy={filterByPrice} handleChange={handleFilterByPriceChange}/>
            </Stack>
          </Grid>
          <Grid
            item
            xs={12}
            sm={9}
            sx={{ width: "100%", mt: { xs: "20px", sm: "0px" } }}
          >
            <Box sx={{ p: "0px 12px 12px 12px" }}>
              <SearchBar backDrop={false} searchContext={'marketplace'} defaultSearchString={query}/>
            </Box>
            <Typography sx={{ px: 2 }}>{`Found (${filteredData.length}) items`}</Typography>
            {content}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
