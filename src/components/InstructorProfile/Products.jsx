import {
  Stack,
  Typography,
  Container,
  Grid,
  Button,
  Box,
} from "@mui/material";
import CustomCard from "../../components/CustomCard";

import { useState } from "react";

/**
 * A component that renders a responsive list of products, with a responsive
 * design that shows different numbers of items based on screen size.
 *
 * It uses the `useMediaQuery` hook from `@mui/material` to determine the
 * screen size and adjust the number of items accordingly.
 *
 * It renders a list of products with a title, a "View more" button, and a
 * responsive layout that shows different numbers of items per row based on
 * screen size.
 *
 * @returns {React.ReactElement} The component element.
 */
function Products({ instructorName, productData }) {
  // State to keep track of the number of courses to display
  const [visibleCount, setVisibleCount] = useState(5);

  // Show a limited number of courses based on visibleCount
  const visibleCourses = productData.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 5); // Load 5 more courses
  };

  const productContent =
    visibleCourses.length === 0 ? (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 10,
        }}
      >
        There is no course for this instructor yet!
      </Box>
    ) : (
      visibleCourses.map((item, idx) => (
        <Grid item xl={2.4} md={4} xs={4} key={idx}>
          <CustomCard dataObj={item} variant="product" />
        </Grid>
      ))
    );

  return (
    <Stack>
      <Stack>
        <Typography variant="h4">
          {instructorName || "Default"} Products
        </Typography>
        <Typography variant="body1">
          Found ({productContent.length}) Products
        </Typography>

        <Container sx={{ mt: 2 }} disableGutters>
          <Grid container spacing={2}>
            {productContent}
          </Grid>
        </Container>
      </Stack>

      {visibleCount < productContent.length && (
        <Stack sx={{ mt: 4, mb: 4 }}>
          <Button
            variant="outlined"
            sx={{ px: 4, py: 2 }}
            onClick={handleLoadMore}
          >
            View 5 more
          </Button>
        </Stack>
      )}
    </Stack>
  );
}

export default Products;

