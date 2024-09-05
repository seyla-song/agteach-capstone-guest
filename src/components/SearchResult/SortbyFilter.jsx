import { Box, Button, Stack, Typography } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
function SortByFilter() {
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
      <Stack direction="row" gap={0} >
        <FormControl
          
        >
          {/* <FormLabel id="demo-radio-buttons-group-label" >Gender</FormLabel> */}
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="Newest"
            name="radio-buttons-group"            
          >
            <FormControlLabel
              value="Newest"
              control={<Radio />}
              label="Newest"
              
            />
            <FormControlLabel value="oldest" control={<Radio />} label="Oldest" />
            <FormControlLabel
              value="other"
              control={<Radio />}
              label="Popularity"
            />
            <FormControlLabel value="other" control={<Radio />} label="A-Z" />
          </RadioGroup>
        </FormControl>
      </Stack>
    </Box>
  );
}
export default SortByFilter;
