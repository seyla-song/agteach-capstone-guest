import { Box, Divider, Grid, Stack, Typography } from '@mui/material';
import { CourseDetailHero } from './components/CourseDetailHero';
import { CourseDetailHighlight } from './components/CouseDetailHighlight';
import { CourseDetailContent } from './components/CourseDetailContent';
import { SuggestedCourseProduct } from './components/SuggestCourseProduct';

function CourseDetailPage() {
  return (
    <Stack alignItems="center">
      <Stack width='100%' alignItems='center' bgcolor={'primary.dark'}>
        <Grid sx={{ maxWidth: '1420px' }} container paddingX={1}>
          <CourseDetailHero />
        </Grid>
      </Stack>
      <Grid sx={{ maxWidth: '1420px' }} container paddingX={1}>
        <CourseDetailHighlight />
        <CourseDetailContent />
        <SuggestedCourseProduct />
        <Grid border={'1px solid black'} item xs={12}>
          Become a member - Get Components from chitra
        </Grid>
      </Grid>
    </Stack>
  );
}

export default CourseDetailPage;
