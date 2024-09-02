import { Grid, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import TimerIcon from '@mui/icons-material/TimerOutlined';

function CourseVideoPage() {
  return (
    <Stack alignItems="center">
      <Stack width="100%" alignItems="center">
        <Grid sx={{ maxWidth: '1420px' }} container paddingX={1}></Grid>
        <CourseAboutComponent />
        <Grid>
        {highlights.map((highlight) => (
          <Stack direction='row' gap alignItems='start' padding>
            {highlight.icons}
            <Typography>{highlight.value} {highlight.title}</Typography>
          </Stack>
        ))}
        </Grid>
      </Stack>
    </Stack>
  );
}

export default CourseVideoPage;

const CourseAboutComponent = () => {
  return (
    <Stack>
      <Typography variant="blgmd">Indoor Gardening and Hydroponics</Typography>
      <Typography>
        Learn about various types of hydroponic setups, nutrient solutions,
        lighting, and plant care techniques hands-on projects to design and
        build a personal hydroponic garden
      </Typography>
      <Typography>
        Created by: <Link>Emily Greene</Link>
      </Typography>
    </Stack>
  );
};

const highlights = [
  {
    title: 'Sections',
    icons: <TimerIcon />,
    value: 20,
  },
  {
    title: 'Hours',
    icons: <TimerIcon />,
    value: 20,
  },
  {
    title: 'Vidoes',
    icons: <TimerIcon />,
    value: 20,
  },
];
