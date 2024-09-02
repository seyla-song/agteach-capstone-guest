import { Grid, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import TimerIcon from '@mui/icons-material/TimerOutlined';
import { CourseObjectiveComponent } from '../../components/CourseObjectiveComponent';
import { SuggestProductCourse } from '../../components/SuggestCourseProduct';
import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';
import { MediaPlayer, MediaProvider } from '@vidstack/react';
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from '@vidstack/react/player/layouts/default';

function CourseVideoPage() {
  return (
    <Stack direction="row">
      <Stack sx={{ flexGrow: 1 }}>
        <Stack width="100%" alignItems="center">
          <MediaPlayer
            title="Sprite Fight"
            src="https://files.vidstack.io/sprite-fight/720p.mp4"
          >
            <MediaProvider />
            <DefaultVideoLayout
              thumbnails="https://files.vidstack.io/sprite-fight/thumbnails.vtt"
              icons={defaultLayoutIcons}
            />
          </MediaPlayer>
          <Grid
            sx={{ maxWidth: '1420px' }}
            container
            paddingX={1}
            py={10}
            gap={5}
          >
            <Grid item xs={7}>
              <CourseAboutComponent />
            </Grid>
            <Grid item xs={9}>
              <Stack gap={2} direction="row">
                {highlights.map((highlight) => (
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
            <Grid item xs={9}>
              <CourseObjectiveComponent />
            </Grid>
            <Grid item xs={9}>
              <SuggestProductCourse />
            </Grid>
          </Grid>
        </Stack>
      </Stack>
      <Stack
        sx={{
          width: '400px',
          height: '100vh',
          bgcolor: 'background.paper',
          position: 'sticky',
          top: 0,
          overflowY: 'auto',
        }}
      >
        <Stack>
          <Typography>hi</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default CourseVideoPage;

const CourseAboutComponent = () => {
  return (
    <Stack gap>
      <Typography variant="h3">Indoor Gardening and Hydroponics</Typography>
      <Typography variant="bxsr">
        Learn about various types of hydroponic setups, nutrient solutions,
        lighting, and plant care techniques hands-on projects to design and
        build a personal hydroponic garden
      </Typography>
      <Typography variant="bxsr">
        Created by: <Link>Emily Greene</Link>
      </Typography>
    </Stack>
  );
};

const highlights = [
  {
    title: 'Sections',
    icons: <TimerIcon fontSize="small" />,
    value: 20,
  },
  {
    title: 'Hours',
    icons: <TimerIcon fontSize="small" />,
    value: 20,
  },
  {
    title: 'Vidoes',
    icons: <TimerIcon fontSize="small" />,
    value: 20,
  },
];
