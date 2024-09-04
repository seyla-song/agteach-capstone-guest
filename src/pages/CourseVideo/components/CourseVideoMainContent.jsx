import { Grid, Stack, Typography } from '@mui/material';
import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';
import { MediaPlayer, MediaProvider } from '@vidstack/react';
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from '@vidstack/react/player/layouts/default';
import { CourseAboutComponent } from './CourseAboutComponent';
import { CourseObjectiveComponent } from '../../../components/CourseObjectiveComponent';
import { SuggestProductCourse } from '../../../components/SuggestCourseProduct';

/**
 * The main content of the course video page.
 *
 * It displays the video player at the top, followed by the course about,
 * course objective, and suggested courses sections.
 *
 * @param {Object} data The data for the course about section.
 * @returns {React.ReactElement} The main content of the course video page.
 */
export const CourseVideoMainContent = ({ data }) => {
  return (
    <Stack sx={{ flexGrow: 1 }}>
      {/* The video player is centered and stretched to the full width */}
      <Stack width="100%" alignItems="center">
        <MediaPlayer
          style={{borderRadius:0}}
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
        <Grid
          sx={{ maxWidth: '1420px' }}
          container
          paddingX={1}
          py={10}
          gap={5}
        >
          {/* The course about section is on the left side and takes up 7/12 of the width */}
          <Grid item xs={8}>
            <CourseAboutComponent />
          </Grid>

          {/* The highlights section is on the right side and takes up 9/12 of the width */}
          <Grid item xs={9}>
            <Stack gap={2} direction="row">
              {data.map((highlight) => (
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
                  {highlight.icons}
                  <Typography variant="bsr">
                    {highlight.value} {highlight.title}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Grid>

          {/* The course objective section is on the right side and takes up 9/12 of the width */}
          <Grid item xs={9}>
            <CourseObjectiveComponent />
          </Grid>

          {/* The suggested courses section is on the right side and takes up 9/12 of the width */}
          <Grid item xs={9}>
            <SuggestProductCourse />
          </Grid>
        </Grid>
      </Stack>
    </Stack>
  );
};
