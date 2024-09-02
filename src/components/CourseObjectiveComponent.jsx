import { Stack, Typography } from '@mui/material';

export const CourseObjectiveComponent = (children) => {
  return (
    <Stack
      gap
      bgcolor="primary.dark"
      color={'white'}
      padding={10}
      {...children}
    >
      <Stack gap maxWidth={500}>
        <Typography variant="h4">
          What you learn in this course? What included
        </Typography>
        <Typography variant="bxsr">
          ✅ How to mix and manage nutrient solutions to ensure optimal plant
          growth and health in a soil-free environment
        </Typography>
        <Typography variant="bxsr">
          ✅ How to design and build various types of hydroponic systems,
          including nutrient film techniques and deep water culture.
        </Typography>
        <Typography variant="bxsr">
          ✅ Techniques for managing light, temperature, and humidity to create
          the ideal conditions for indoor plant growth.
        </Typography>
      </Stack>
    </Stack>
  );
};
