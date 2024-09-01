import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  styled,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { CourseDetailHero } from './components/CourseDetailHero';

function CourseDetailPage() {
  return (
    <Box display='flex' justifyContent='center' alignItems="center">
      <Box
        sx={{
          maxWidth: '1420px',
        }}
      >
        <Grid container spacing={2}>
          <CourseDetailHero />
          <Grid style={{ border: '1px solid black' }} item xs={12}>
            What you learn in this course? What include
          </Grid>
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
