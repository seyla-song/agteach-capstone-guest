import { Container, Grid, Stack, Typography } from '@mui/material';
import { CustomCarousel } from './CustomCarousel';

export const SuggestedCourseProduct = ({ courses, products }) => {
  return (

      <Stack gap={5} py={10} width='100%'>
        <Stack gap={2}>
          <Typography variant="h4" maxWidth={300}>
            People also learn this course
          </Typography>
          <CustomCarousel data={courses} slideToShow={5} />
        </Stack>
        <Stack gap={2}>
          <Typography variant="h4" maxWidth={300}>
            You might want to buy the product related to this course
          </Typography>
          <CustomCarousel
            data={products}
            cardVariant="product"
            slideToShow={5}
          />
        </Stack>
      </Stack>

  );
};
