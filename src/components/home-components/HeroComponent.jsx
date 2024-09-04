import { Box, Grid, Typography } from "@mui/material";

const HERO_COMPONENT = [
  {
    title: "Embrace Sustainability and Self-Sufficiency",
    message:
      "Our platform teaches you how to become self-sufficient, reducing your reliance on grocery stores and minimizing your carbon footprint",
  },
  {
    title: "Prioritize Your Health and Wellness",
    message:
      "Our courses guide you in cultivating nutritious, pesticide-free produce, ensuring that you and your family enjoy the healthiest, freshest food possible",
  },
  {
    title: "Gain Valuable Knowledge and Skills",
    message:
      "You'll learn modern agricultural techniques, advanced gardening skills, and practical tips that you can apply immediately",
  },
];

export default function HeroComponent() {
  return (
    <Box
      bgcolor="primary.main"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: { xs: "fit", sm: "645px" },
        padding: {xs: "50px 10px", md: '50px'}
      }}
    >
      <Box sx={{ mb: 10 }}>
        <Typography sx={{typography: {xs: 'h4', sm: 'h3', md: 'h2'}}} color="common.white">
          There are many <br /> platform, Why should <br /> you learn on
          AgTeach?
        </Typography>
      </Box>
      <Grid container spacing={{ xs: 5, md: 10 }}>
        {HERO_COMPONENT.map((data) => (
          <Grid key={data.title} item xs={12} sm={4}>
            <Typography sx={{typography: {xs: 'blgsm', sm: 'h4'}}} color="common.white">
              {data.title}
            </Typography>
            <Typography variant="bsr" color="common.white">
              {data.message}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
