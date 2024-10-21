import { Box, Button, Stack, Typography } from '@mui/material';

export const CategoryFilter = ({ category, handleChange }) => {
  const inactive = {
    backgroundColor: 'dark.100',
    color: 'dark.200',
  };

  return (
    <Box sx={{ pr: 1 }}>
      <Typography sx={{ typography: { xs: 'bsmr', sm: 'blgsm' } }}>
        Categories
      </Typography>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        gap={{ xs: 1, sm: 2 }}
        sx={{ mt: '6px' }}
      >
        <Button
          variant="contained"
          onClick={() => {
            if (category !== 'course') handleChange('course');
          }}
          sx={{
            borderRadius: '45px',
            typography: { xs: 'bsr', sm: 'bmdsm' },
            ...(category === 'product' ? inactive : {}),
          }}
        >
          Course
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            if (category !== 'product') handleChange('product');
          }}
          sx={{
            borderRadius: '45px',
            typography: { xs: 'bsr', sm: 'bmdsm' },
            ...(category === 'course' ? inactive : {}),
          }}
        >
          Product
        </Button>
      </Stack>
    </Box>
  );
};

export default CategoryFilter;
