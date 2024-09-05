import { Button, Grid, Link, Stack, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { CustomCard } from '../CustomCard';

export const ProductWishlist = ({ data }) => {
  return (
    <Stack gap={3}>
      <Stack gap>
        <Typography variant="h4">My product save for later</Typography>
        <Typography variant="bsr">Found ({data.length}) Courses</Typography>
      </Stack>

      <Grid container spacing>
        {data.map((item, idx) => (
          <Grid item key={idx} xs={6} md={2}>
            <Link
              component={RouterLink}
              to={`/marketplace/${item.id}`}
              underline="none"
            >
              <CustomCard dataObj={item} variant="product" />
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
