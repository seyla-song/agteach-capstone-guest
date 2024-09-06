import { Padding } from "@mui/icons-material";
import { Box, Button, Chip, Stack, Typography } from "@mui/material";

const categoryStyle = {
  backgroundColor: "dark.100",
  color: "dark.200",
  borderRadius: "45px",
  padding:{ xs: "5px 10px", sm: "5px 10px" },
  typography: { xs: "bsr", sm: "bmdsm" },
};

const categoryStyle2 = {
  borderRadius: "45px",
  backgroundColor: "primary.main",
  color: "common.white",
  padding:{ xs: "5px 10px", sm: "5px 10px" },
  typography: { xs: "bsr", sm: "bmdsm" },
};

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
        <Chip
          variant="contained"
          label="Plant"
          sx={categoryStyle2}
          onClick={() => console.log("clicked")}
        />
        <Chip
          variant="contained"
          label="Fertilizer"
          sx={categoryStyle}
          onClick={() => console.log("clicked")}
        />
        <Chip
          variant="contained"
          label="Seed"
          sx={categoryStyle}
          onClick={() => console.log("clicked")}
        />
        <Chip
          variant="contained"
          label="Tool"
          sx={categoryStyle}
          onClick={() => console.log("clicked")}
        />
      </Box>
    </Box>
  );
}
export default Category;
