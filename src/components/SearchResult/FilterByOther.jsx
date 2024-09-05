import {
  Box,
  Button,
  Checkbox,
  FormGroup,
  Stack,
  Typography,
} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
function FilterByOther() {
  return (
    <Box>
      <Typography
        sx={
          {
            //   typography: { xs: "bxsmd", sm: "bmdsm" },
          }
        }
      >
        Sort By
      </Typography>
      <Stack direction="row" gap={0}>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Price Low to high"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Long course(up to 10 hours)"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Short course(up to 5 hours)"
          />
        </FormGroup>
      </Stack>
    </Box>
  );
}
export default FilterByOther;
