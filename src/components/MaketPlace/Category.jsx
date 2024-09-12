import { Box, Chip, Typography } from "@mui/material";

const categoryStyle = {
  backgroundColor: "dark.100",
  color: "dark.200",
  border: theme => `2px solid ${theme.palette.grey[500]}`,
  typography: { xs: "bsr", sm: "bmdsm" },
  '&:hover': {
    backgroundColor: "primary.main", // New background color on hover
    color: "common.white", // New text color on hover
    border: theme => `2px solid ${theme.palette.primary.main}`,
  },
};
const categoryStyle1 = {
  backgroundColor: "primary.main",
  color: "common.white",
  border: theme => `2px solid ${theme.palette.primary.main}`,
  typography: { xs: "bsr", sm: "bmdsm" },
  '&:hover': {
    backgroundColor: "primary.main", // New background color on hover
    color: "common.white", // New text color on hover
    border: theme => `2px solid ${theme.palette.primary.main}`,
  },
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
          sx={categoryStyle1}
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
