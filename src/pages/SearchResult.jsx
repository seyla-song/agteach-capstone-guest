import { useState, useEffect, Fragment } from 'react';
import { useLocation } from 'react-router-dom';
import { useSearchProductQuery } from '../services/api/productApi';
import { useSearchCourseQuery } from '../services/api/courseApi';

import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from '@mui/material';

import {
  SearchList,
  SearchBar,
  SortByFilter,
  CategoryFilter,
  FilterByOther,
  ContentLoading,
  ItemsLoading,
} from '../components/index';

function SearchResultPage() {
  const currentLocation = useLocation().search;
  const queryParams = new URLSearchParams(currentLocation);
  const query = queryParams.get('name');

  const {
    data: courseData,
    isLoading: isCourseLoading,
    isError: isCourseError,
  } = useSearchCourseQuery(query);
  const {
    data: productData,
    isLoading: isProductLoading,
    isError: isProductError,
  } = useSearchProductQuery(query);

  const [category, setCategory] = useState('course');
  const [sortBy, setSortBy] = useState('newest');

  const [filterByRuntime, setFilterByRuntime] = useState('none');
  const [limit, setLimit] = useState(9);
  const [rawData, setRawData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const handleCategoryChange = (state) => {
    if (state !== category) setCategory(state);
  };

  const handleSortByChange = (state) => {
    if (state !== sortBy) setSortBy(state);
  };

  const handleFilterByRuntimeChange = (state) => {
    if (state === filterByRuntime) setFilterByRuntime('none');
    else setFilterByRuntime(state);
  };

  const handleLimitChange = () => {
    setLimit(limit + 9);
  };

  useEffect(() => {
    if (category === 'course') {
      if (courseData) {
        setRawData(courseData.data || []);
      }
    } else if (category === 'product') {
      if (productData) {
        setRawData(productData.data || []);
      }
    }
  }, [courseData, category, productData]);

  useEffect(() => {
    setLimit(9);

    let rawDataToFilter = [...rawData];

    // Sort by both date and price
    rawDataToFilter.sort((a, b) => {
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
        return priceB - priceA; // Sort by highest price
      }

      // Filter by runtime if applicable
      if (category === 'course') {
        if (filterByRuntime === 'long') {
          return b.duration - a.duration;
        } else if (filterByRuntime === 'short') {
          return a.duration - b.duration;
        }
      }

      return 0;
    });

    setFilteredData(rawDataToFilter);
  }, [category, sortBy, filterByRuntime, rawData]);

  if (isCourseLoading || isProductLoading || category) <ContentLoading />;

  if (isProductError || isCourseError) {
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
    <Container
      maxWidth={false}
      sx={{
        maxWidth: '1420px',
        marginY: {
          xs: '30px',
          md: '60px',
        },
      }}
    >
      <SearchBar
        backDrop={'primary'}
        searchLabel={'Learn Smarter, Learn Faster. AgTeach'}
        defaultSearchString={query}
      />

      <Stack py={3}>
        <Typography maxWidth={500} variant="h3">
          Search result for "{query}"
        </Typography>
        {isCourseLoading && isProductLoading && <ItemsLoading title="courses or products" />}
        {!isCourseLoading && !isProductLoading && (
          <Typography variant="bsmr">
            Course({courseData?.results || 0}) & Product(
            {productData?.results || 0})
          </Typography>
        )}
      </Stack>

      <Grid container>
        <Grid
          sx={{
            borderRight: { xs: 0, sm: `1px solid lightgrey` },
          }}
          item
          xs={12}
          sm={3}
        >
          <Stack direction="column" gap={3} px={3} pb={3}>
            <CategoryFilter
              category={category}
              handleChange={handleCategoryChange}
            />
            <Divider />
            <SortByFilter sortBy={sortBy} handleChange={handleSortByChange} />

            <Divider />
            <FilterByOther
              filterByRuntime={filterByRuntime}
              handleFilterByRuntimeChange={handleFilterByRuntimeChange}
              context={category}
            />

            <Divider />
          </Stack>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Stack px={3} gap={2} minHeight="100vh">
            <SearchList
              dataObj={filteredData}
              cardVariant={category}
              limit={limit}
              handleLimitChange={handleLimitChange}
            />
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}

export default SearchResultPage;
