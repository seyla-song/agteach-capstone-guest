import { Box, Button, Stack, Typography } from "@mui/material";

function CategoryFilter() {
  return (
    <Box>
      <Typography
        sx={{
          typography: { xs: "bssm", sm: "blgsm4" },
        }}
      >
        Categoires
      </Typography>
      <Stack direction="row" gap={{xs:1, sm: 2}}>
        <Button
          variant="contained"
          sx={{
            borderRadius: "45px",
            typography: { xs: "bxsmd", sm: "bmdsm" },
          }}
        >
          Course
        </Button>
        <Button
          variant="contained"
          sx={{
            borderRadius: "45px",
            typography: { xs: "bxsmd", sm: "bmdsm" },
          }}
        >
          Product
        </Button>
      </Stack>
    </Box>
  );
}
export default CategoryFilter;
