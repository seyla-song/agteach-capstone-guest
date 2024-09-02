import { Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const CourseAboutComponent = () => {
  return (
    <Stack gap>
      <Typography variant="h3">Indoor Gardening and Hydroponics</Typography>
      <Typography variant="bxsr">
        Learn about various types of hydroponic setups, nutrient solutions,
        lighting, and plant care techniques hands-on projects to design and
        build a personal hydroponic garden
      </Typography>
      <Typography variant="bxsr">
        Created by: <Link> Emily Greene</Link>
      </Typography>
    </Stack>
  );
};
