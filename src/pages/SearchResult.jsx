import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSearchProductQuery } from '../services/api/productApi';
import { useSearchCourseQuery } from '../services/api/courseApi';

import { Container, Divider, Grid, Stack, Typography } from '@mui/material';

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
    const dataMap = {
      course: courseData?.data || [],
      product: productData?.data || [],
    };
    setRawData(dataMap[category] || []);

    setLimit(9);

    let sortedData = [...rawData];

    const sortCallbacks = {
      newest: (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
      oldest: (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
      alphabet: (a, b) => a.name.localeCompare(b.name),
      plth: (a, b) => parseFloat(a.price) - parseFloat(b.price),
      phtl: (a, b) => parseFloat(b.price) - parseFloat(a.price),
    };

    const sortCallback = sortCallbacks[sortBy];
    sortedData.sort(sortCallback);

    if (category === 'course' && filterByRuntime !== 'none') {
      sortedData.sort((a, b) =>
        filterByRuntime === 'long'
          ? b.duration - a.duration
          : a.duration - b.duration
      );
    }

    setFilteredData(sortedData);
  }, [category, sortBy, filterByRuntime, rawData, courseData, productData]);

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

      <Stack py={3} gap={1}>
        <Typography maxWidth={500} variant="h3">
          Search result for "{query}"
        </Typography>
        {isCourseLoading && isProductLoading && (
          <ItemsLoading title="courses or products" />
        )}
        {!isCourseLoading && !isProductLoading && (
          <Typography variant="bsmr" color="dark.300">
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
          <Stack direction="column" gap={3} pr={3} pb={3}>
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
          <Stack pl={{ xs: 0, md: 3 }} gap={2} minHeight="100vh">
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
