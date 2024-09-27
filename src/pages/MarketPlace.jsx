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
    }
    console.log('raw data: ',productData);
  }, [productData]);
  
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
            <Typography sx={{ px: 2 }}>Found (200) items</Typography>
            <SearchList dataObj={rawData} cardVariant={'product'} limit={limit} handleLimitChange={handleLimitChange}/>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
