import { Box, Checkbox, FormGroup, Stack, Typography } from "@mui/material";
import FormControlLabel from '@mui/material/FormControlLabel';

function FilterByOther({filterBy, handleChange}) {
  return (
    <Box>
      <Typography sx={{ typography: { xs: "body2", sm: "h6" } }}>
        Filter By
      </Typography>
      <Stack direction="row" gap={2}> {/* Adjusted gap for better spacing */}
        <FormGroup>
          <FormControlLabel 
            label="Price Low to High"
            control={<Checkbox checked={filterBy} 
            onChange={handleChange}
          />}
          />
        </FormGroup>
      </Stack>
    </Box>
  );
}

export default FilterByOther;
