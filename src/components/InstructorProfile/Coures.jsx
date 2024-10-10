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
  
  
  function Courses({ courseData, instructorName }) {
    // State to keep track of the number of courses to display
    const [visibleCount, setVisibleCount] = useState(5);
  
    // Show a limited number of courses based on visibleCount
    const visibleCourses = courseData.slice(0, visibleCount);
    
      const handleLoadMore = () => {
        setVisibleCount((prevCount) => prevCount + 5); // Load 5 more courses
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
          <Typography variant="body1">
            Found ({courseData.length}) Courses
          </Typography>
  
          <Container sx={{ mt: 2 }} disableGutters>
            <Grid container spacing={2}>
              {courseContent}
            </Grid>
          </Container>
        </Stack>
        {visibleCount < courseData.length && (
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
  
  export default Courses;
  
