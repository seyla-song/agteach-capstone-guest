import { Box, Grid, Stack, Typography } from '@mui/material';
import { CustomCarousel } from '../CustomCarousel';

export const SuggestedCourseProduct = ({ courses, products }) => {
  return (
    <Grid border={'1px solid black'} item xs={12}>
      <Stack gap={5}>
        <Stack>
          <Typography>People also learn this course</Typography>
          <CustomCarousel data={courses} slideToShow={5} />
        </Stack>
        <Stack>
          <Typography>
            You might want to buy the product related to this course
          </Typography>
          <CustomCarousel
            data={products}
            cardVariant="product"
            slideToShow={5}
          />
        </Stack>
      </Stack>
    </Grid>
  );
};
