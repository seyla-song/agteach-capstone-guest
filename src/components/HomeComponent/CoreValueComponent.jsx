import { Grid, Typography, Container, Stack } from '@mui/material';

const HERO_COMPONENT = [
  {
    title: 'Learn to live sustainably and be self-sufficient',
    message:
      'Our platform helps you grow your own food, reduce grocery store trips, and cut down on your carbon footprint',
  },
  {
    title: 'Your Health and Wellness is our priority',
    message:
      'Our courses teach you how to grow nutritious, pesticide-free food so you and your family can enjoy the freshest, healthiest meals.',
  },
  {
    title: 'Gain Valuable Knowledge and Skills',
    message:
      "You'll learn techniques like hydroponics, vertical farming and crop rotation, along with practical tips you can apply immediately.",
  },
];

export const CoreValueComponent = () => {
  return (
    <Container maxWidth={false} sx={{ bgcolor: 'primary.main', my: 5 }}>
      <Stack
        px={{ xs: 1, md: 10 }}
        py={{ xs: 15, md: 15 }}
        gap={5}
        justifyContent="space-between"
      >
        <Typography
          sx={{ typography: { xs: 'h3', md: 'h2' } }}
          color="common.white"
        >
          With many platforms <br /> available, what makes <br /> AgTeach the
          best choice?
        </Typography>
        <Grid container spacing={{ xs: 5, md: 10 }}>
          {HERO_COMPONENT.map((data) => (
            <Grid key={data.title} item xs={12} sm={4}>
              <Typography
                sx={{ typography: { xs: 'bmdsm', sm: 'h4' } }}
                color="common.white"
              >
                {data.title}
              </Typography>
              <Typography variant="bsr" color="common.white">
                {data.message}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  );
};
