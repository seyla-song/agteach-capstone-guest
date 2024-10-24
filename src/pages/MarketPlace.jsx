import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import {
  useGetAllCategoryQuery,
  useSearchProductQuery,
} from "../services/api/productApi";

import {
  Container,
  Divider,
  Stack,
  Grid,
  Typography,
  Button,
} from "@mui/material";

import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

import {
  ItemsLoading,
  SearchList,
  Category,
  SortByFilter,
  SearchBar,
  ContentLoading,
} from "../components/index";

export default function MarketPlace() {
  const currentLocation = useLocation().search;
  const queryParams = new URLSearchParams(currentLocation);
  const limit = 12;
  const [page, setPage] = useState(1);
  const query = queryParams.get("name") || "";
  const [category, setCategory] = useState(); // State to hold the selected category

  const {
    data: productData,
    isLoading: isProductLoading,
    isError: isProductError,
  } = useSearchProductQuery({ query, page, limit, category }); // Pass category to the query

  const { data: categoryData } = useGetAllCategoryQuery();

  const [sortBy, setSortBy] = useState("newest");
  const [rawData, setRawData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const totalItems = productData ? productData.results : 0; // Total items from the backend
  const totalPages = Math.ceil(totalItems / limit); // Calculate total pages

  const handleCategoryChange = (selectedCategory) => {
    // Update the selected category and reset page to 1
    setCategory(selectedCategory !== category ? selectedCategory : undefined);
    setPage(1); // Reset to the first page on category change
  };

  const handleSortByChange = (state) => {
    if (state !== sortBy) setSortBy(state);
  };

  const handleNext = () => {
    setPage((prevPage) => prevPage + 1);
    window.scrollTo(0, 0);
  };

  const handlePrevious = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
    window.scrollTo(0, 0); // Prevent going below page 1
  };

  useEffect(() => {
    setPage(1); // Reset page when the query or category changes
  }, [query, category]);

  useEffect(() => {
    if (productData) {
      setRawData(productData.data);
    }

    let dataToFilter = [...rawData] || [];

    const sortFunctions = {
      newest: (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
      oldest: (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
      alphabet: (a, b) => a.name.localeCompare(b.name),
      plth: (a, b) => parseFloat(a.price) - parseFloat(b.price),
      phtl: (a, b) => parseFloat(b.price) - parseFloat(a.price),
    };

    dataToFilter.sort(sortFunctions[sortBy] || (() => 0));
    setFilteredData(dataToFilter);
  }, [rawData, sortBy, productData, category]);

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
          maxWidth: "1420px",
          marginY: {
            xs: "30px",
            md: "60px",
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
            <Stack direction="column" gap={3} px={3} pb={3}>
              <Category
                allCategories={categoryData ? categoryData.data : []}
                category={category}
                handleChange={handleCategoryChange} // Pass the handler
              />
              <Divider />
              <SortByFilter sortBy={sortBy} handleChange={handleSortByChange} />
              <Divider />
            </Stack>
          </Grid>
          <Grid item xs={12} sm={9}>
            <Stack px={3} gap={2} minHeight="100vh">
              <SearchBar
                backDrop={false}
                searchContext={"marketplace"}
                defaultSearchString={query}
              />
              {isProductLoading && <ItemsLoading title={"marketplace"} />}
              {!isProductLoading && productData && (
                <Typography typography="bsr">{`Found (${productData.results}) items`}</Typography>
              )}
              {isProductLoading && <ContentLoading />}
              {filteredData?.length === 0 && (
                <Typography>There is no search result.</Typography>
              )}
              {!isProductLoading && productData && (
                <SearchList
                  dataObj={filteredData}
                  cardVariant={"product"}
                  limit={limit}
                />
              )}
              {filteredData?.length !== 0 && (
                <Stack
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  gap={3}
                  py={3}
                >
                  <Button
                    variant="outlined"
                    onClick={handlePrevious} // Prevent going below page 1
                    disabled={page === 1} // Disable if on the first page
                  >
                    <NavigateBeforeIcon />
                  </Button>
                  <Typography>{`Page ${page} of ${totalPages}`}</Typography>
                  <Button
                    variant="outlined"
                    onClick={handleNext}
                    disabled={page === totalPages} // Disable if on the last page
                  >
                    <NavigateNextIcon />
                  </Button>
                </Stack>
              )}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
