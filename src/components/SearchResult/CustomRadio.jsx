import { FormControlLabel, Radio, Typography } from "@mui/material";

function CustomRadio({ label, value }) {
  return (
    <FormControlLabel
      value={value}
      control={<Radio />}
      label={<Typography
        sx={{ typography: { xs: "bsr", sm: "bmdr" } }}
      >{label}</Typography>}
    />
  );
}
export default CustomRadio;
