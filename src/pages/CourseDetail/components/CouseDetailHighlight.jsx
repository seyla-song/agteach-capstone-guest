import { Grid, Stack, Typography } from '@mui/material';


export const CourseDetailHighlight = () => {
  return (
    <Grid style={{ border: '1px solid black', padding: 0 }} item xs={12}>
      <Grid container paddingY={10}>
        <Grid xs={7} item>
          <Typography>What you learn in this course? What included</Typography>
          <Typography>
            ✅ How to mix and manage nutrient solutions to ensure optimal plant
            growth and health in a soil-free environment
          </Typography>
          <Typography>
            ✅ How to design and build various types of hydroponic systems,
            including nutrient film techniques and deep water culture.
          </Typography>
          <Typography>
            ✅ Techniques for managing light, temperature, and humidity to
            create the ideal conditions for indoor plant growth.
          </Typography>
        </Grid>
        <Grid xs={5} item bgcolor={'yellow'}>
          <Stack>
            <Typography>This course include:</Typography>
            <Stack direction="row" gap={2}>
              <Typography>0</Typography>
              <Typography variant="body1">30 hours</Typography>
            </Stack>
            <Stack direction="row" gap={2}>
              <Typography>0</Typography>
              <Typography variant="body1">60 videos</Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  );
};
