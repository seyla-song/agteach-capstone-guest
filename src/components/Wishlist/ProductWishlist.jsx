import { Button, Grid, Link, Stack, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useState } from 'react';
import { CustomCard } from '../CustomCard';
import { ViewMore } from '../ViewMore';
export const ProductWishlist = ({ data }) => {
  const [courses, setCourses] = useState(data);

  const handleDelete = (id) => {
    setCourses((prevCourses) => prevCourses.filter(course => course.id !== id));
  };

  return (
    <Stack gap={3}>
      <Stack gap>
        <Typography variant="h4">My product save for later</Typography>
        <Typography variant="bsr">Found ({data.length}) Products</Typography>
      </Stack>
{/* component View More */}
      <ViewMore
        items={courses}
        renderItem={(item) => (
          <Link
              component={RouterLink}
              to={`/marketplace/${item.id}`}
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