import { useLocation } from 'react-router-dom';
import CategoryFilter from '../components/SearchResult/CategoryFilter';
import SortByFilter from '../components/SearchResult/SortbyFilter';
import {
  Box,
  Container,
  Divider,
  Grid2 as Grid,
  Stack,
  Typography,
} from '@mui/material';
import FilterByOther from '../components/SearchResult/FilterByOther';
import SearchList from '../components/SearchResult/SearchList';
import { SearchBar } from '../components/index';
import { useState, useEffect, Fragment } from 'react';
import { useSearchProductQuery } from '../services/api/productApi';
import { useSearchCourseQuery } from '../services/api/courseApi';

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

  let content;

  if (category === 'course') {
    if (isCourseLoading) {
      content = (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          Loading...
        </div>
      );
    } else if (courseData.results === 0)
      content = (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          No results were found!
        </div>
      );
    else if (isCourseError)
      content = (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          Something went wrong. please try again later!
        </div>
      );
    else if (courseData)
      content = (
        <SearchList
          dataObj={filteredData}
          cardVariant={category}
          limit={limit}
          handleLimitChange={handleLimitChange}
        />
      );
  }

  if (category === 'product') {
    if (isProductLoading) {
      content = (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          Loading...
        </div>
      );
    } else if (productData.results === 0)
      content = (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          No results were found!
        </div>
      );
    else if (isProductError)
      content = (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          Something went wrong. please try again later!
        </div>
      );
    else if (productData)
      content = (
        <SearchList
          dataObj={filteredData}
          cardVariant={category}
          limit={limit}
          handleLimitChange={handleLimitChange}
        />
      );
  }

  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: '1420px',
        display: 'flex',
        flexDirection: 'column',
        padding: 0,
        margin: {
          xs: 'auto auto 50px auto',
          md: '100px auto 100px auto',
        },
      }}
    >
      <SearchBar
        backDrop={'primary'}
        searchLabel={'Learn Smarter, Learn Faster. AgTeach'}
        defaultSearchString={query}
      />
      <Box sx={{ mx: { xs: '5px', sm: 0 } }}>
        <Typography
          variant="h2"
          sx={{
            my: { xs: '20px', md: '69px' },
          }}
        >
          Search result{' '}
        </Typography>
        <Grid container spacing={1}>
          <Grid
            size={{ xs: 12, sm: 4 }}
            sx={{
              borderRight: { xs: 0, sm: `1px solid lightgrey` },
              pr: { xs: 0, sm: '10px' },
            }}
          >
            <Stack
              direction={{ xs: 'row', sm: 'column' }}
              gap={{ xs: 1, sm: 4 }}
              sx={{
                '& > *': {
                  borderRight: { xs: '1px solid lightgrey', sm: 'none' },
                },
                '& > *:last-child': {
                  borderRight: 'none',
                },
              }}
            >
              <CategoryFilter
                category={category}
                handleChange={handleCategoryChange}
              />
              <Divider sx={{ display: { xs: 'none', sm: 'block' } }} />
              <SortByFilter sortBy={sortBy} handleChange={handleSortByChange} />
              {category === 'course' && (
                <Fragment>
                  <Divider sx={{ display: { xs: 'none', sm: 'block' } }} />
                  <FilterByOther
                    filterByRuntime={filterByRuntime}
                    handleFilterByRuntimeChange={handleFilterByRuntimeChange}
                    context={category}
                  />
                </Fragment>
              )}
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, sm: 8 }} sx={{ width: '100%' }}>
            {content}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default SearchResultPage;
