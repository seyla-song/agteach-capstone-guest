import { Button, Grid, Stack, Typography, Link } from '@mui/material';
import { CustomCard } from '../CustomCard';
import { Link as RouterLink } from 'react-router-dom';

export default function CourseList({ data }) {
  return (
    <Stack gap={3}>
      <Stack gap>
        <Typography variant="h3">My Learning</Typography>
        <Typography variant="bsr">Found ({data.length}) Courses</Typography>
      </Stack>

      <Grid container spacing>
        {data.map((item, idx) => (
          <Grid item key={idx} xs={6} md={2}>
            <Link
              component={RouterLink}
              to={`/courses/${item.id}`}
              underline="none"
            >
              <CustomCard dataObj={item} />
            </Link>
          </Grid>
        ))}
      </Grid>

      <Button variant="outlined" sx={{ px: 4, py: 2 }}>
        View (5) more
      </Button>
    </Stack>
  );
};
