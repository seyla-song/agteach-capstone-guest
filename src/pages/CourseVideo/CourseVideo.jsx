import { Grid, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import TimerIcon from '@mui/icons-material/TimerOutlined';
import { CourseObjectiveComponent } from '../../components/CourseObjectiveComponent';
import { SuggestProductCourse } from '../../components/SuggestCourseProduct';
import { CourseAccordionComponent } from '../../components/CourseAccordionComponent';
import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';
import { MediaPlayer, MediaProvider } from '@vidstack/react';
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from '@vidstack/react/player/layouts/default';
import { CourseVideoSidebar } from './components/CourseVideoSidebar';

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
      <CourseVideoSidebar data={courses} />
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

const courses = [
  {
    title: 'Introduction to Indoor Gardening',
    duration: '35min',
    topics: [
      { title: 'Overview of indoor gardening', duration: '10min' },
      { title: 'Benefits and Challenges', duration: '15min' },
      { title: 'Course Objectives and Structure', duration: '10min' },
    ],
  },
  {
    title: 'Setting Up Your Hydroponic System',
    duration: '35min',
    topics: [
      { title: 'Overview of hydroponic systems', duration: '10min' },
      { title: 'Setting Up Equipment', duration: '15min' },
      { title: 'System Maintenance', duration: '10min' },
    ],
  },
  {
    title: 'Understanding Nutrients',
    duration: '35min',
    topics: [
      { title: 'Essential Nutrients', duration: '15min' },
      { title: 'Nutrient Solutions', duration: '10min' },
      { title: 'Common Deficiencies', duration: '10min' },
    ],
  },
  {
    title: 'Plant Selection and Preparation',
    duration: '35min',
    topics: [
      { title: 'Choosing the Right Plants', duration: '15min' },
      { title: 'Preparing Seeds and Seedlings', duration: '10min' },
      { title: 'Soil and Growing Mediums', duration: '10min' },
    ],
  },
  {
    title: 'Lighting for Indoor Plants',
    duration: '35min',
    topics: [
      { title: 'Types of Grow Lights', duration: '15min' },
      { title: 'Light Duration and Intensity', duration: '10min' },
      { title: 'Positioning Lights', duration: '10min' },
    ],
  },
  {
    title: 'Temperature and Humidity Control',
    duration: '35min',
    topics: [
      { title: 'Optimal Temperature Ranges', duration: '10min' },
      { title: 'Humidity Requirements', duration: '10min' },
      { title: 'Monitoring and Adjusting Conditions', duration: '15min' },
    ],
  },
  {
    title: 'Water Management',
    duration: '35min',
    topics: [
      { title: 'Watering Techniques', duration: '15min' },
      { title: 'Water Quality and pH Levels', duration: '10min' },
      { title: 'Irrigation Systems', duration: '10min' },
    ],
  },
  {
    title: 'Pest and Disease Management Part I',
    duration: '35min',
    topics: [
      { title: 'Identifying Common Pests', duration: '10min' },
      { title: 'Preventive Measures', duration: '15min' },
      { title: 'Treatment Options', duration: '10min' },
    ],
  },
  {
    title: 'Pest and Disease Management Part II',
    duration: '35min',
    topics: [
      { title: 'Identifying Common Diseases', duration: '10min' },
      { title: 'Disease Prevention Strategies', duration: '15min' },
      { title: 'Advanced Treatment Methods', duration: '10min' },
    ],
  },
];
