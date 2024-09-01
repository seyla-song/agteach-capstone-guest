import { Box, Grid } from '@mui/material';
import { CourseDetailHero } from './components/CourseDetailHero';
import { CourseDetailHighlight } from './components/CouseDetailHighlight';
import { CourseDetailContent } from './components/CourseDetailContent';
import { SuggestedCourseProduct } from './components/SuggestCourseProduct';

function CourseDetailPage() {
  return (
    <Box display="flex" justifyContent="center">
      <Grid sx={{ maxWidth: '1420px' }} container paddingX={1}>
        <CourseDetailHero />
        <CourseDetailHighlight />
        <CourseDetailContent />
        <SuggestedCourseProduct />
        <Grid border={'1px solid black'} item xs={12}>
          Become a member - Get Components from chitra
        </Grid>
      </Grid>
    </Box>
  );
}

export default CourseDetailPage;
