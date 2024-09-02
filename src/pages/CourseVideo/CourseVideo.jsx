import { Grid, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import TimerIcon from '@mui/icons-material/TimerOutlined';
import { CourseObjectiveComponent } from '../../components/CourseObjectiveComponent';
import { SuggestProductCourse } from '../../components/SuggestCourseProduct';

function CourseVideoPage() {
  return (
    <Stack alignItems="center">
      <Stack width="100%" alignItems="center">
        <Grid
          sx={{ maxWidth: '1420px' }}
          bgcolor="yellowgreen"
          container
          paddingX={1}
          gap={10}
        >
          <Grid item xs={7}>
            <CourseAboutComponent />
          </Grid>
          <Grid item xs={7}>
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
          <Grid item xs={12}>
            <CourseObjectiveComponent />
          </Grid>
          <Grid item xs={12}>
            <SuggestProductCourse />
          </Grid>
        </Grid>
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
