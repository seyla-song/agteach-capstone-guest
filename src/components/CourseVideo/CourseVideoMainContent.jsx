import { Divider, Grid, Stack, Typography } from '@mui/material';
import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';
import { MediaPlayer, MediaProvider } from '@vidstack/react';
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from '@vidstack/react/player/layouts/default';
import { CourseAboutComponent } from '../../components/CourseVideo/index';
import { CourseObjectiveComponent } from '../../components/CourseObjectiveComponent';
import { SuggestedCourseProduct } from '../../components/SuggestCourseProduct';
/**
 * The main content of the course video page.
 *
 * It displays the video player at the top, followed by the course about,
 * course objective, and suggested courses sections.
 *
 * @param {Object} data The data for the course about section.
 * @returns {React.ReactElement} The main content of the course video page.
 */
export const CourseVideoMainContent = (data) => {
  const { highlights, courses, products } = data;

  return (
    <Stack sx={{ flexGrow: 1 }}>
      {/* The video player is centered and stretched to the full width */}
      <Stack width="100%" alignItems="center">
        <MediaPlayer
          style={{ borderRadius: 0 }}
          title="Sprite Fight"
          src="https://files.vidstack.io/sprite-fight/720p.mp4"

        >
          <MediaProvider />
          <DefaultVideoLayout
            thumbnails="https://files.vidstack.io/sprite-fight/thumbnails.vtt"
            icons={defaultLayoutIcons}
          />
        </MediaPlayer>

        {/* The rest of the content is wrapped in a container with a maximum width of 1420px */}
        <Grid sx={{ maxWidth: '1420px' }} container px={1} py={10}>
          {/* The course about section is on the left side and takes up 7/12 of the width */}
          <Grid item xs={10}>
            <Stack gap={5}>
              <CourseAboutComponent />
              <Stack gap={2} direction="row">
                {highlights.map((item) => (
                  <Stack
                    sx={{
                      borderColor: 'dark.100',
                      borderWidth: 1,
                      borderStyle: 'solid',
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
              <CourseObjectiveComponent />
              <Divider sx={{ pt:10}} />
              {/* <SuggestedCourseProduct courses={courses} products={products} /> */}
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </Stack>
  );
};
