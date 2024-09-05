import { Box, Button, Stack, Typography } from "@mui/material";

function CategoryFilter() {
  return (
    <Box sx={{ pr: 1 }}>
      <Typography
        sx={{
          typography: { xs: "bsmr", sm: "blgsm4" },
        }}
      >
        Categoires
      </Typography>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        gap={{ xs: 1, sm: 2 }}
        sx={{ mt: "6px" }}
      >
        <Button
          variant="contained"
          sx={{
            borderRadius: "45px",
            typography: { xs: "bsr", sm: "bmdsm" },
          }}
        >
          Course
        </Button>
        <Button
          variant="contained"
          sx={{
            borderRadius: "45px",
            typography: { xs: "bsr", sm: "bmdsm" },
          }}
        >
          Product
        </Button>
      </Stack>
    </Box>
  );
}
export default CategoryFilter;
