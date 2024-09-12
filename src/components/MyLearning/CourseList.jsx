import { Button, Grid, Stack, Typography, Link } from '@mui/material';
import { CustomCard } from '../CustomCard';
import { Link as RouterLink } from 'react-router-dom';

/**
 * CourseList component renders a list of courses that the user has
 * in their my learning section.
 *
 * @param {{ data: Array<Course> }} props
 *   - data is an array of Course objects that will be passed to CustomCard
 *     component. Each Course object should have the following properties:
 *     - id (number)
 *     - name (string)
 *     - image (string)
 *     - instructor (string)
 */

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
