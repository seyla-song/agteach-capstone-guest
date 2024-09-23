import { Button, Grid, Stack, Typography, Link } from '@mui/material';
import { CustomCard } from '../CustomCard';
import { Link as RouterLink } from 'react-router-dom';
import { useState } from 'react';
import { ViewMore } from '../ViewMore';

export const CourseWishlist = ({ data }) => {
  const [courses, setCourses] = useState(data);

  const handleDelete = (id) => {
    setCourses((prevCourses) => prevCourses.filter(course => course.id !== id));
  };

  return (

    <Stack gap={3}>
      <Stack gap>
        <Typography variant="h4">My courses saved for later</Typography>
        <Typography variant="body2">Found ({courses.length}) Courses</Typography>
      </Stack>

      <ViewMore
        items={courses}
        renderItem={(item) => (
          <Link
            component={RouterLink}
            to={`/courses/${item.id}`}
            underline="none"
          >
            <CustomCard
              dataObj={item}
              showDelete={true}
              onDelete={handleDelete} // Pass the delete handler
              variant="course"
            />
          </Link>
        )}
      />

    </Stack>
  );
};
