import {
  Container,
  Divider,
  Stack,
  Grid,
  Typography,
  Box,
} from "@mui/material";
import Category from "../components/MaketPlace/Category";
import SortBy from "../components/MaketPlace/SortBy";
import FilterBy from "../components/MaketPlace/FilterBy";
import SearchBar from "../components/SearchBarComponent";
import SearchList from "../components/MaketPlace/SearchList";
import { products } from "../utils/carouselDummy";

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
  const variant = { product: "product", course: "course" };
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
              <Category />
              <Divider sx={{ display: { xs: "none", sm: "block" } }} />
              <SortBy />
              <Divider sx={{ display: { xs: "none", sm: "block" } }} />
              <FilterBy />
            </Stack>
          </Grid>
          <Grid
            item
            xs={12}
            sm={9}
            sx={{ width: "100%", mt: { xs: "20px", sm: "0px" } }}
          >
            <Box sx={{ p: "0px 12px 12px 12px" }}>
              <SearchBar backDrop={false} />
            </Box>
            <Typography sx={{ px: 2 }}>Found (200) items</Typography>
            <SearchList dataObj={products} cardVariant={variant.product} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
