import {
  Box,
  Button,
  Checkbox,
  FormGroup,
  Stack,
  Typography,
} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import CustomFormController from "./CutomFormController";
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
          <CustomFormController
            label="Price Low to high"
            value="price"
            control={<Checkbox defaultChecked />}
          />
          <CustomFormController
            label="Long course(up to 10 hours)"
            value="long"
            control={<Checkbox  />}
          />
          <CustomFormController
            label="Short course(up to 5 hours)"
            value="short"
            control={<Checkbox  />}
          />
        </FormGroup>
      </Stack>
    </Box>
  );
}
export default FilterByOther;
