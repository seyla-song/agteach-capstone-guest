import { Grid, Stack, Typography } from '@mui/material';

export const CourseDetailHighlight = () => {
  return (
    <Grid item xs={12}>
      <Grid container>
        <Grid xs={7} item>
          <Stack
            gap
            justifyContent="center"
            alignItems="center"
            bgcolor="primary.dark"
            color={'white'}
            padding={10}
          >
            <Stack gap maxWidth={500}>
              <Typography variant="h4">
                What you learn in this course? What included
              </Typography>
              <Typography variant="bxsr">
                ✅ How to mix and manage nutrient solutions to ensure optimal
                plant growth and health in a soil-free environment
              </Typography>
              <Typography variant="bxsr">
                ✅ How to design and build various types of hydroponic systems,
                including nutrient film techniques and deep water culture.
              </Typography>
              <Typography variant="bxsr">
                ✅ Techniques for managing light, temperature, and humidity to
                create the ideal conditions for indoor plant growth.
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid xs={5} item>
          <Stack
            color="primary.dark"
            bgcolor="grey.300"
            justifyContent="center"
            alignItems="center"
            height="100%"
            gap
          >
            <Stack>
              <Typography variant="h4">This course include:</Typography>
              <Stack direction="row" gap={2}>
                <Typography>0</Typography>
                <Typography variant="bsr">30 hours</Typography>
              </Stack>
              <Stack direction="row" gap={2}>
                <Typography>0</Typography>
                <Typography variant="bsr">60 videos</Typography>
              </Stack>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  );
};

