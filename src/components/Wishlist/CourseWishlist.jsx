import { Button, Grid, Stack, Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useState } from 'react';
import CustomCard from '../CustomCard';
import ViewMore from '../ViewMore';

export default function CourseWishlist({ data }) {
  const [courses, setCourses] = useState(data);

  const handleDelete = (id) => {
    setCourses((prevCourses) => prevCourses.filter(course => course.id !== id));
  };

  return (

    <Stack gap={3}>
      <Stack gap>
        <Typography variant="h4">My courses saved for later</Typography>
        <Typography variant="bsr">Found ({courses.length}) Courses</Typography>
      </Stack>
{/* component View More */}
      <ViewMore
        items={courses}
        renderItem={(item) => (
          <Link
            component={RouterLink}
            to={`/courses/${item.id}`}
            underline="none"
          >
{/* component Custom Card */}
            <CustomCard
              dataObj={item}
              showDelete={true}
              onDelete={handleDelete} 
              variant="course"
            />
          </Link>
        )}
      />

    </Stack>
  );
};
