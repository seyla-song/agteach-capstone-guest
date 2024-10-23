import { Grid, Typography, Container, Stack } from '@mui/material';

const HERO_COMPONENT = [
  {
    title: 'Embrace Sustainability and Self-Sufficiency',
    message:
      'Our platform teaches you how to become self-sufficient, reducing your reliance on grocery stores and minimizing your carbon footprint',
  },
  {
    title: 'Prioritize Your Health and Wellness',
    message:
      'Our courses guide you in cultivating nutritious, pesticide-free produce, ensuring that you and your family enjoy the healthiest, freshest food possible',
  },
  {
    title: 'Gain Valuable Knowledge and Skills',
    message:
      "You'll learn modern agricultural techniques, advanced gardening skills, and practical tips that you can apply immediately",
  },
];

export const CoreValueComponent = () => {
  return (
    <Container maxWidth={false} sx={{ bgcolor: 'primary.main', my: 5 }}>
      <Stack
        px={{ xs: 1, md: 10 }}
        pt={{ xs: 5, md: 15 }}
        pb={{ xs: 10, md: 15 }}
        gap={5}
        justifyContent="space-between"
      >
        <Typography
          sx={{ typography: { xs: 'h3', md: 'h2' } }}
          color="common.white"
        >
          There are many <br /> platform, Why should <br /> you learn on
          AgTeach?
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
