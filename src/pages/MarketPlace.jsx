import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { useSearchProductQuery } from '../services/api/productApi';

import {
  Container,
  Divider,
  Stack,
  Grid,
  Typography,
  Box,
} from '@mui/material';

import {
  ItemsLoading,
  SearchList,
  Category,
  SortByFilter,
  SearchBar,
  ContentLoading,
} from '../components/index';

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
  const {
    data: productData,
    isLoading: isProductLoading,
    isError: isProductError,
  } = useSearchProductQuery(query);

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

  const handleLimitChange = () => {
    setLimit(limit + 9);
  };

  useEffect(() => {
    if (productData) {
      setRawData(productData.data);
    }
  }, [productData, query]);

  useEffect(() => {
    let dataToFilter = [...rawData] || [];
    // filter by categories
    if (category === 'plant')
      dataToFilter = dataToFilter.filter((product) => product.categoryId === 1);
    else if (category === 'fertilizer')
      dataToFilter = dataToFilter.filter((product) => product.categoryId === 2);
    else if (category === 'seed')
      dataToFilter = dataToFilter.filter((product) => product.categoryId === 3);
    else if (category === 'tool')
      dataToFilter = dataToFilter.filter((product) => product.categoryId === 4);

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
      } else if (sortBy === 'plth') {
        const priceA = parseFloat(a.price) || 0;
        const priceB = parseFloat(b.price) || 0;
        return priceA - priceB; // Sort by lowest price
      } else if (sortBy === 'phtl') {
        const priceA = parseFloat(a.price) || 0;
        const priceB = parseFloat(b.price) || 0;
        return priceB - priceA; // Sort by lowest price
      }

      return 0;
    });

    setFilteredData(dataToFilter);
  }, [rawData, category, sortBy, filterByPrice, limit]);

  if (isProductError) {
    return (
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        Something went wrong. please try again later!
      </Stack>
    );
  }

  return (
    <>
      <Container
        maxWidth={false}
        sx={{
          maxWidth: '1420px',
          margin: {
            xs: '30px auto 50px auto',
            md: '50px auto 100px auto',
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
            }}
          >
            <Stack direction="column" gap={3} px={3}>
              <Category
                category={category}
                handleChange={handleCategoryChange}
              />
              <Divider />
              <SortByFilter sortBy={sortBy} handleChange={handleSortByChange} />
            </Stack>
          </Grid>
          <Grid item xs={12} sm={9}>
            <Stack px={3} gap={2} minHeight='100vh'>
              <SearchBar
                backDrop={false}
                searchContext={'marketplace'}
                defaultSearchString={query}
              />
              {isProductLoading && <ItemsLoading title={'marketplace'} />}
              {!isProductLoading && productData && (
                <Typography typography="bsr">{`Found (${filteredData.length}) items`}</Typography>
              )}
              {isProductLoading && <ContentLoading />}
              {!isProductLoading && productData && (
                <SearchList
                  dataObj={filteredData}
                  cardVariant={'product'}
                  limit={limit}
                  handleLimitChange={handleLimitChange}
                />
              )}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
