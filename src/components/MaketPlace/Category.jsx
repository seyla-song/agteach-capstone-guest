import { Box, Button, Stack, Typography } from "@mui/material";

const categoryStyle = {
  backgroundColor: "dark.100",
  color: "dark.200",
  borderRadius: "45px",
  typography: { xs: "bsr", sm: "bmdsm" },
}

const categoryStyle2 = {
  borderRadius: "45px",
  typography: { xs: "bsr", sm: "bmdsm" },
}

function Category() {
  return (
    <Box sx={{ pr: 1 }}>
      <Typography sx={{ typography: { xs: "bsmr", sm: "blgsm" } }}>
        Categoires
      </Typography>
      <Box
        direction={{ xs: "column", sm: "row" }}
        sx={{ mt: "6px", display: "flex", flexWrap: "wrap", gap: "10px" }}
      >
        <Button
          variant="contained"
          sx={categoryStyle2}
        >
          Plant
        </Button>
        <Button
          variant="contained"
          sx={categoryStyle}
          onClick={() => console.log("clicked")}
        >
          Fertilizer
        </Button>
        <Button
          variant="contained"
          sx={categoryStyle}
          onClick={() => console.log("clicked")}
        >
          Seed
        </Button>
        <Button
          variant="contained"
          sx={categoryStyle}
          onClick={() => console.log("clicked")}
        >
          Tool
        </Button>
      </Box>
    </Box>
  );
}
export default Category;
