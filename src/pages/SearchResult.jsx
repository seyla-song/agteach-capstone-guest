import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useSearchProductQuery } from "../services/api/productApi";
import { useSearchCourseQuery } from "../services/api/courseApi";

import {
  Button,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

import {
  SearchList,
  SearchBar,
  SortByFilter,
  CategoryFilter,
  FilterByOther,
  ContentLoading,
  ItemsLoading,
  CourseList,
} from "../components/index";
import { ProductionQuantityLimitsSharp } from "@mui/icons-material";

function SearchResultPage() {
  const currentLocation = useLocation().search;
  const queryParams = new URLSearchParams(currentLocation);
  const query = queryParams.get("name");
  const [page, setPage] = useState(1);
  const [limits, setLimit] = useState(9);
  const [allCourses, setAllCourses] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  const {
    data: courseData,
    isLoading: isCourseLoading,
    isFetching,
    isError: isCourseError,
  } = useSearchCourseQuery({ query, page, limits });

  const {
    data: productData,
    isLoading: isProductLoading,
    isError: isProductError,
  } = useSearchProductQuery(query);

  const [category, setCategory] = useState("course");
  const [sortBy, setSortBy] = useState("newest");

  const totalPages = isCourseLoading
    ? 0
    : Math.ceil(courseData.results / limits);
  console.log(totalPages); // Outputs: 4

  const [filterByRuntime, setFilterByRuntime] = useState("none");
  const [rawData, setRawData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const handleCategoryChange = (state) => {
    if (state !== category) setCategory(state);
  };

  const handleSortByChange = (state) => {
    if (state !== sortBy) setSortBy(state);
  };

  const handleFilterByRuntimeChange = (state) => {
    if (state === filterByRuntime) setFilterByRuntime("none");
    else setFilterByRuntime(state);
  };

  const handleLimitChange = () => {
    console.log(isCourseLoading);

    setPage((prevPage) => prevPage + 1); // Increment page when "Load more" is clicked
    // isCourseLoading={isFetching}
    if (isCourseLoading) return;
    console.log(isCourseLoading);
    // }
  };
  // let courseList = [];

  useEffect(() => {
    if (courseData?.data) {
      setAllCourses((prev) => [...prev, ...courseData.data]);
      // setFilteredData(allCourses);
    }
    if (productData?.data) {
      setAllProducts((prev) => [...prev, ...productData.data]);
      // setFilteredData(allProducts);
    }
    if (category === "course") {
      setFilteredData(allCourses);
    } else {
      setFilteredData(allProducts);
    }
    console.log("setFilteredData", filteredData);
  }, [courseData, productData]);

  // useEffect(() => {
  //   // Combine existing raw data with new page data
  //   const newCourseData = courseData?.data || [];
  //   const newProductData = productData?.data || [];

  //   const dataMap = {
  //     course: newCourseData,
  //     product: newProductData,
  //   };

  //   setFilteredData(newCourseData);

  //   if (page === 1) {
  //     // If it's the first page, replace the data
  //     setRawData(dataMap[category] || []);
  //   } else {
  //     // For subsequent pages, concatenate the new data
  //     if (isCourseLoading && !isFetching) {
  //     }

  //     // setRawData((prevRawData) => [...prevRawData, ...dataMap[category]]);
  //   }
  //   // console.log(rawData.length && rawData);
  //   console.log("newCourseData 1", newCourseData);
  // }, [courseData, productData, category, page, isFetching]);

  // useEffect(() => {
  // const dataMap = {
  //   course: courseData?.data || [],
  //   product: productData?.data || [],
  // };
  // // dataMap['product'] dataMap['course']
  // console.log(dataMap[category]);
  // setRawData(dataMap[category] || []);

  // setLimit(9);

  // let sortedData = [...rawData];

  // const sortCallbacks = {
  //   newest: (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
  //   oldest: (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
  //   alphabet: (a, b) => a.name.localeCompare(b.name),
  //   plth: (a, b) => parseFloat(a.price) - parseFloat(b.price),
  //   phtl: (a, b) => parseFloat(b.price) - parseFloat(a.price),
  // };

  // const sortCallback = sortCallbacks[sortBy];
  // sortedData.sort(sortCallback);

  // if (category === "course" && filterByRuntime !== "none") {
  //   sortedData.sort((a, b) =>
  //     filterByRuntime === "long"
  //       ? b.duration - a.duration
  //       : a.duration - b.duration
  //   );
  // }

  // setFilteredData(sortedData);
  // let sortedData = [...rawData];

  // const sortCallbacks = {
  //   newest: (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
  //   oldest: (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
  //   alphabet: (a, b) => a.name.localeCompare(b.name),
  //   plth: (a, b) => parseFloat(a.price) - parseFloat(b.price),
  //   phtl: (a, b) => parseFloat(b.price) - parseFloat(a.price),
  // };

  // const sortCallback = sortCallbacks[sortBy];
  // sortedData.sort(sortCallback);

  // if (category === "course" && filterByRuntime !== "none") {
  //   sortedData.sort((a, b) =>
  //     filterByRuntime === "long"
  //       ? b.duration - a.duration
  //       : a.duration - b.duration
  //   );
  // }

  // setFilteredData(sortedData);
  // }, [category, sortBy, filterByRuntime, rawData, courseData, productData]);

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
        maxWidth: "1420px",
        marginY: {
          xs: "30px",
          md: "60px",
        },
      }}
    >
      <SearchBar
        backDrop={"primary"}
        searchLabel={"Learn Smarter, Learn Faster. AgTeach"}
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
              dataObj={filteredData || []}
              cardVariant={category}
              limit={limits}
              handleLimitChange={handleLimitChange}
              isCourseLoading={isFetching}
            />
            <Button
              variant="outlined"
              onClick={() => setPage((prevPage) => prevPage - 1)}
            >
              Previous
            </Button>
            <Button
              variant="outlined"
              onClick={() => setPage((prevPage) => prevPage + 1)}
            >
              Next
            </Button>
            <Typography>Page 1 of {totalPages}</Typography>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}

export default SearchResultPage;
