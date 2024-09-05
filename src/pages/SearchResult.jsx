import { Link } from "react-router-dom";
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

function SearchResultPage() {
  const variant = { product: "product", course: "course" };
  //   const products = [];
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1420px",
        display: "flex",
        flexDirection: "column",
        gap: { xs: "20px", md: "69px" },
        padding: 0,
        margin: {
          xs: "auto auto 50px auto",
          md: "100px auto 100px auto",
        },
      }}
    >
      <SearchBar
        backDrop={"black"}
        slogan={"Learn Smarter, Learn Faster. AgTeach"}
      />
      <Box sx={{mx:{xs: "5px", sm: 0}}}>
      <Typography variant="h2">Search result </Typography>
      <Grid container spacing={1}>
        <Grid
          size={{ xs: 12, sm: 4 }}
          sx={{ borderRight: { xs: "1px solid grey" }, sm: 0 }}
        >
          <Stack
            direction={{ xs: "row", sm: "column" }}
            gap={{ xs:1, sm: 2 }}
            sx={{
              "& > *": {                
                borderRight: {xs: "1px solid grey", sm: "none"}, // Add right border to each item
              },
              "& > *:last-child": {
                borderRight: "none", // Remove border from the last item
              },
            }}
          >
            <CategoryFilter />
            <Divider sx={{ display: { xs: "none", sm: "block" } }} />
            <SortByFilter />
            <Divider sx={{ display: { xs: "none", sm: "block" } }} />
            <FilterByOther />
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, sm: 8 }} sx={{ width: "100%" }}>
          <SearchList dataObj={products} cardVariant={variant.product} />
        </Grid>
      </Grid>
      </Box>

      {/* <Link to="/marketplace/:productId">Product 1 detail</Link> */}
    </Container>
  );
}

export default SearchResultPage;
