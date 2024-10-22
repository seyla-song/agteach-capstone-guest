import { Box, Stack, Chip, Typography } from '@mui/material';

export const Category = ({ category, handleChange }) => {
  return (
    <Stack gap={1}>
      <Typography sx={{ typography: { xs: 'bmdsm', sm: 'blgsm' } }}>
        Categoires
      </Typography>
      <Stack
        direction="row"
        flexWrap="wrap"
        gap={1}
      >
        <Chip
          variant="contained"
          label="Plant"
          sx={category === 'plant' ? categoryStyle1 : categoryStyle}
          onClick={() => handleChange('plant')}
        />
        <Chip
          variant="contained"
          label="Fertilizer"
          sx={category === 'fertilizer' ? categoryStyle1 : categoryStyle}
          onClick={() => handleChange('fertilizer')}
        />
        <Chip
          variant="contained"
          label="Seed"
          sx={category === 'seed' ? categoryStyle1 : categoryStyle}
          onClick={() => handleChange('seed')}
        />
        <Chip
          variant="contained"
          label="Tool"
          sx={category === 'tool' ? categoryStyle1 : categoryStyle}
          onClick={() => handleChange('tool')}
        />
      </Stack>
    </Stack>
  );
};
export default Category;

const categoryStyle = {
  backgroundColor: 'dark.100',
  color: 'dark.200',
  border: (theme) => `2px solid ${theme.palette.grey[400]}`,
  typography: { xs: 'bxsr', sm: 'bsr' },
  '&:hover': {
    backgroundColor: 'primary.main', // New background color on hover
    color: 'common.white', // New text color on hover
    border: (theme) => `2px solid ${theme.palette.primary.main}`,
  },
};
const categoryStyle1 = {
  backgroundColor: 'primary.main',
  color: 'common.white',
  border: (theme) => `2px solid ${theme.palette.primary.main}`,
  typography: { xs: 'bsr', sm: 'bssm' },
  '&:hover': {
    backgroundColor: 'primary.main', // New background color on hover
    color: 'common.white', // New text color on hover
    border: (theme) => `2px solid ${theme.palette.primary.main}`,
  },
};
