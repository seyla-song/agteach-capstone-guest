import { Stack, Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export const CustomSectionTitle = ({ title, path }) => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      width={'100%'}
    >
      <Typography
        sx={{
          typography: { xs: 'blgsm', sm: 'h4' },
          mb: { xs: '15px', md: '30px' },
          maxWidth: { xs: '250px', md: '300px' },
        }}
      >
        {title}
      </Typography>
      <Link
        component={RouterLink}
        to={path || '/'}
        fontSize="small"
        sx={{ textUnderlineOffset: 3 }}
      >
        View All
      </Link>
    </Stack>
  );
};
