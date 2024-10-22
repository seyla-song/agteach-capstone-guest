import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { useSearchProductQuery } from '../services/api/productApi';

import { Container, Divider, Stack, Grid, Typography } from '@mui/material';

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

    let dataToFilter = [...rawData] || [];

    const categoryFilterMap = {
      plant: 1,
      fertilizer: 2,
      seed: 3,
      tool: 4,
    };

    const sortFunctions = {
      newest: (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
      oldest: (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
      alphabet: (a, b) => a.name.localeCompare(b.name),
      plth: (a, b) => parseFloat(a.price) - parseFloat(b.price),
      phtl: (a, b) => parseFloat(b.price) - parseFloat(a.price),
    };

    if (category in categoryFilterMap) {
      dataToFilter = dataToFilter.filter(
        (product) => product.categoryId === categoryFilterMap[category]
      );
    }

    dataToFilter.sort(sortFunctions[sortBy] || (() => 0));

    setFilteredData(dataToFilter);
  }, [rawData, category, sortBy, limit, productData]);

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
            <Stack px={3} gap={2} minHeight="100vh">
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
