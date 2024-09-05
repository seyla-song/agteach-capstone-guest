import { Box, Button, Stack, Typography } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import CustomRadio from "./CustomRadio";
function SortByFilter() {
  return (
    <Box>
      <Typography sx={{ typography: { xs: "bsmr", sm: "bmdsm" } }}>
        Sort By
      </Typography>

      <Stack
        direction="row"
        gap={0}
        sx={{
          typography: { xs: "btr", sm: "bmdsm" },
        }}
      >
        <FormControl
          sx={{
            FormLabel: { xs: "bsr", sm: "bmdsm" },
          }}
        >
          {/* <FormLabel id="demo-radio-buttons-group-label" >Gender</FormLabel> */}
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="Newest"
            name="radio-buttons-group"
          >
            <CustomRadio label="Newest" value="newest" />
            <CustomRadio label="Oldest" value="oldest" />
            <CustomRadio label="A-Z" value="alphabet" />
          </RadioGroup>
        </FormControl>
      </Stack>
    </Box>
  );
}
export default SortByFilter;
