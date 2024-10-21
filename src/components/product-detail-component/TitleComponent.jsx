import { Box, Typography } from '@mui/material';

const typographyStyle = { typography: { xs: 'blgsm', md: 'h3' } };

/**
 * A reusable React component that displays the title and price of a product.
 *
 * @return {JSX.Element} A JSX element that renders the title and price of a product.
 */

export const TitleComponent = ({ title, price }) => {
  return (
    <Box display="flex" justifyContent="space-between">
      <Typography sx={typographyStyle}>{title}</Typography>
      <Typography sx={typographyStyle}>${price}</Typography>
    </Box>
  );
};
