import { Box, Button, Stack, Typography } from "@mui/material";

function Category() {
  return (
    <Box sx={{ pr: 1 }}>
      <Typography sx={{ typography: { xs: "bsmr", sm: "blgsm" } }}>
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
          Plant
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "dark.100",
            color: "dark.200",
            borderRadius: "45px",
            typography: { xs: "bsr", sm: "bmdsm" },
          }}
          onClick={() => console.log("clicked")}
        >
          Fertilizer
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "dark.100",
            color: "dark.200",
            borderRadius: "45px",
            typography: { xs: "bsr", sm: "bmdsm" },
          }}
          onClick={() => console.log("clicked")}
        >
          Seed
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "dark.100",
            color: "dark.200",
            borderRadius: "45px",
            typography: { xs: "bsr", sm: "bmdsm" },
          }}
          onClick={() => console.log("clicked")}
        >
          Tool
        </Button>
      </Stack>
    </Box>
  );
}
export default Category;
