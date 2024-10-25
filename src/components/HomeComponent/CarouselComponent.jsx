import { Box } from '@mui/material';
import { CustomCarousel } from '../CustomCarousel';

export const CarouselComponent = ({ data, cardVariant, children }) => {
  return (
    <Box sx={{ p: { xs: '10px', md: 0 } }}>
      {children}
      <CustomCarousel data={data} cardVariant={cardVariant} />
    </Box>
  );
};
