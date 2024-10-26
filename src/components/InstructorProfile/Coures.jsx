import { Stack, Typography, Container, Grid, Button, Box } from "@mui/material";
import CustomCard from "../../components/CustomCard";
import { useState } from "react";

/**
 * A component that renders a list of courses, with a responsive design
 * that shows different numbers of items based on screen size.
 *
 * It uses the `useMediaQuery` hook from `@mui/material` to determine
 * the screen size and adjust the number of items accordingly.
 *
 * It renders a list of courses with a title and a "View more" button.
 *
 * @returns {React.ReactElement} The component element.
 */

export const Courses = ({ courseData, instructorName }) => {
  // State to keep track of the number of courses to display
  const limit = 5;
  const [visibleCount, setVisibleCount] = useState(limit);
  const [showAll, setShowAll] = useState(false); // New state to track if all products are shown

  // Show a limited number of courses based on visibleCount
  // const visibleCourses = courseData.slice(0, visibleCount);
  const visibleCourses = showAll
    ? courseData
    : courseData.slice(0, visibleCount);

  const handleLoadMore = () => {
    if (showAll) {
      setShowAll(false); // Collapse back to showing only 5 products
      setVisibleCount(limit); // Reset visibleCount to 5
    } else {
      if (visibleCount + limit >= courseData.length) {
        setShowAll(true); // Show all products when visibleCount reaches the total number of courses
      }
      setVisibleCount((prevCount) => prevCount + limit); // Load 5 more products
    }
  };
  const courseContent =
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
          <CustomCard dataObj={item} variant="course" />
        </Grid>
      ))
    );

  return (
    <Stack>
      <Stack>
        <Typography variant="h4">
          {instructorName || "Default"} Courses
        </Typography>
        <Typography variant="bmdmd" color="dark.300">
          Found ({courseData.length || 0}) Courses
        </Typography>

        <Container sx={{ mt: 2 }}>
          <Grid container spacing={2}>
            {courseContent}
          </Grid>
        </Container>
      </Stack>

      {courseData.length > limit && (
        <Stack sx={{ mt: 4, mb: 4 }}>
          <Button
            variant="outlined"
            sx={{ px: 4, py: 2 }}
            onClick={handleLoadMore}
          >
            {showAll ? "Show Less" : "View 5 More"}
          </Button>
        </Stack>
      )}
    </Stack>
  );
};
