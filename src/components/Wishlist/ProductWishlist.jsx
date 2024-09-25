import { Button, Grid, Link, Stack, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useState } from 'react';
import CustomCard from '../CustomCard';
import ViewMore from '../ViewMore';
export default function ProductWishlist({ data }) {
  const [courses, setProducts] = useState(data);

  const handleDelete = (id) => {
    setProducts((prevProducts) => prevProducts.filter(product => product.id !== id));
  };

  return (
    <Stack gap={3}>
      <Stack gap>
        <Typography variant="h4">My product save for later</Typography>
        <Typography variant="bsr">Found ({courses.length}) Products</Typography>
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