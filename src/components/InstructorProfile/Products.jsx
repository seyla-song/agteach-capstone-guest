import { Stack, Typography, Container, Grid, Button, Box } from "@mui/material";
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
export const Products = ({ instructorName, productData }) => {
  const limit = 5;
  const [visibleCount, setVisibleCount] = useState(limit);
  const [showAll, setShowAll] = useState(false); // New state to track if all products are shown

  // Show a limited number of courses based on visibleCount
  // const visibleCourses = courseData.slice(0, visibleCount);
  const visibleProducts = showAll
    ? productData
    : productData.slice(0, visibleCount);

  const handleLoadMore = () => {
    if (showAll) {
      setShowAll(false); // Collapse back to showing only 5 products
      setVisibleCount(limit); // Reset visibleCount to 5
    } else {
      setVisibleCount((prevCount) => prevCount + limit); // Load 5 more products
      if (visibleCount + limit >= productData.length) {
        setShowAll(true); // Show all products when visibleCount reaches the total number of courses
      }
    }
  };

  const productContent =
    visibleProducts.length === 0 ? (
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
      visibleProducts.map((item, idx) => (
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
        <Typography variant="bmdmd" color="dark.300">
          {/* <Typography variant="bxsm"> */}
          Found ({productContent.length || 0}) Products
        </Typography>

        <Container sx={{ mt: 2 }}>
          <Grid container spacing={2}>
            {productContent}
          </Grid>
        </Container>
      </Stack>

      {productData.length > limit && (
        <Stack sx={{ mt: 4, mb: 4 }}>
          <Button
            variant="outlined"
            sx={{ px: 4, py: 1 }}
            onClick={handleLoadMore}
          >
            {showAll ? "Show Less" : "View 5 More"}
          </Button>
        </Stack>
      )}
    </Stack>
  );
};
