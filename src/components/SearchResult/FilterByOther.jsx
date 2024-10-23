import { Box, Checkbox, FormGroup, Stack, Typography } from '@mui/material';
import CustomFormController from './CutomFormController';
import { Fragment } from 'react';

export const FilterByOther = ({
  filterByPrice,
  handleFilterByPriceChange,
  filterByRuntime,
  handleFilterByRuntimeChange,
  context,
}) => {
  return (
    <Box>
      <Typography sx={{ typography: { xs: 'bmdsm', sm: 'blgsm' } }}>
        Filter By
      </Typography>
      <Stack direction="row" gap={0}>
        <FormGroup>
          {context === 'course' && (
            <Fragment>
              <CustomFormController
                label="Long course(up to 10 hours)"
                value="long"
                control={
                  <Checkbox
                    checked={filterByRuntime === 'long'}
                    onChange={() => handleFilterByRuntimeChange('long')}
                  />
                }
              />
              <CustomFormController
                label="Short course(up to 5 hours)"
                value="short"
                control={
                  <Checkbox
                    checked={filterByRuntime === 'short'}
                    onChange={() => handleFilterByRuntimeChange('short')}
                  />
                }
              />
            </Fragment>
          )}
        </FormGroup>
      </Stack>
    </Box>
  );
};
export default FilterByOther;
