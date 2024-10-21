import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import TimerIcon from "@mui/icons-material/TimerOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import MovieCreationOutlinedIcon from "@mui/icons-material/MovieCreationOutlined";
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";
import { CourseAboutComponent } from "../../components/CourseVideo/index";
import { CourseObjectiveComponent } from "../../components/CourseObjectiveComponent";
import { SuggestedCourseProduct } from "../../components/SuggestCourseProduct";
import displayDuration from "../../utils/displayDuration";
/**
 * The main content of the course video page.
 *
 * It displays the video player at the top, followed by the course about,
 * course objective, and suggested courses sections.
 *
 * @param {Object} data The data for the course about section.
 * @returns {React.ReactElement} The main content of the course video page.
 */
export const CourseVideoMainContent = ({
  videoNameUrl,
  courses,
  products,
  courseData,
  productSuggestions,
  children,
}) => {
  const { name, url } = videoNameUrl;
  const {
    name: courseName,
    description,
    instructor,
    courseObjective,
  } = courseData;

  const highlights = [
    {
      title: "Sections",
      icons: <LibraryBooksOutlinedIcon fontSize="small" />,
      value: courseData.sections.length,
    },
    {
      title: "",
      icons: <TimerIcon fontSize="small" />,
      value: displayDuration(courseData.duration),
    },
    {
      title: "Vidoes",
      icons: <MovieCreationOutlinedIcon fontSize="small" />,
      value: courseData.numberOfVideo,
    },
  ];

  return (
    <Stack sx={{ flexGrow: 1 }}>
      {/* The video player is centered and stretched to the full width */}
      <Stack width="100%" alignItems="center">
        <MediaPlayer style={{ borderRadius: 0 }} title={name} src={url}>
          <MediaProvider />
          <DefaultVideoLayout icons={defaultLayoutIcons} />
        </MediaPlayer>
        <Box
          bgcolor="green"
          width="100%"
          display={{ xs: "block", md: "none" }}
          borderBottom={{ xs: "1px solid #000000", md: "none" }}
        >
          {children}
        </Box>
        {/* The rest of the content is wrapped in a container with a maximum width of 1420px */}
        <Grid sx={{ maxWidth: "1420px" }} container px={1} py={10}>
          {/* The course about section is on the left side and takes up 7/12 of the width */}
          <Grid item xs={12} md={10}>
            <Stack gap={5}>
              <CourseAboutComponent
                courseName={courseName}
                description={description}
                instructor={instructor}
              />
              <Stack gap={2} direction="row">
                {highlights.map((item) => (
                  <Stack
                    sx={{
                      borderColor: "dark.100",
                      borderWidth: 1,
                      borderStyle: "solid",
                    }}
                    flex={1}
                    borderRadius={1}
                    justifyContent="center"
                    py={3}
                    direction="row"
                    alignItems="start"
                    gap
                  >
                    {item.icons}
                    <Typography variant="bsr">
                      {item.value} {item.title}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
              <CourseObjectiveComponent courseObjective={courseObjective} />
              <Divider sx={{ pt: 10 }} />

              <SuggestedCourseProduct
                productSuggestions={productSuggestions}
                courses={courses}
                products={products}
              />
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </Stack>
  );
};
