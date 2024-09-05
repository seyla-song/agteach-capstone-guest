import { Link } from "react-router-dom";
import CategoryFilter from "../components/SearchResult/CategoryFilter";
import SortByFilter from "../components/SearchResult/SortbyFilter";
import {
  Container,
  Divider,
  Grid2 as Grid,
  Stack,
  Typography,
} from "@mui/material";
import FilterByOther from "../components/SearchResult/FilterByOther";

function SearchResultPage() {
  return (
    <Container>
      <Typography variant="h2">Search result </Typography>
      <Grid>
        <Stack
          direction={{ xs: "row", sm: "column" }}
          sx={
            {
              //   direction: { xs: "rows", sm: "column" },
            }
          }
        >
          <CategoryFilter />
          <Divider />
          <SortByFilter />
          <Divider />
          <FilterByOther />
        </Stack>
      </Grid>

      {/* <Link to="/marketplace/:productId">Product 1 detail</Link> */}
    </Container>
  );
}

export default SearchResultPage;
