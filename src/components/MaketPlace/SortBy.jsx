import { Box, Stack, Typography } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

function SortByFilter() {
  return (
    <Box>
      <Typography sx={{ typography: { xs: "body2", sm: "h6" } }}>
        Sort By
      </Typography>

      <Stack
        direction="row"
        gap={2} // Increased gap for better spacing
        sx={{
          typography: { xs: "body2", sm: "body1" },
        }}
      >
        <FormControl>
          {/* Optionally, add a FormLabel if you need one */}
          {/* <FormLabel id="sort-by-label">Sort By</FormLabel> */}
          <RadioGroup
            aria-labelledby="sort-by-label"
            defaultValue="newest"
            name="radio-buttons-group"
          >
            <FormControlLabel
              control={<Radio />}
              label="Newest"
              value="newest"
            />
            <FormControlLabel
              control={<Radio />}
              label="Oldest"
              value="oldest"
            />
            <FormControlLabel
              control={<Radio />}
              label="Popularity"
              value="popularity"
            />
            <FormControlLabel
              control={<Radio />}
              label="A-Z"
              value="alphabet"
            />
          </RadioGroup>
        </FormControl>
      </Stack>
    </Box>
  );
}

export default SortByFilter;