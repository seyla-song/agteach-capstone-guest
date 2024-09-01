import { Box, Grid } from '@mui/material';
import { CourseDetailHero } from './components/CourseDetailHero';
import { CourseDetailHighlight } from './components/CouseDetailHighlight';

function CourseDetailPage() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Box
        sx={{
          maxWidth: '1420px',
        }}
      >
        <Grid container spacing={2}>
          <CourseDetailHero />
          <CourseDetailHighlight />
          <Grid style={{ border: '1px solid black' }} item xs={12}>
            Course Content
          </Grid>
          <Grid style={{ border: '1px solid black' }} item xs={12}>
            Suggested Product and Course
          </Grid>
          <Grid style={{ border: '1px solid black' }} item xs={12}>
            Become a member
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default CourseDetailPage;
