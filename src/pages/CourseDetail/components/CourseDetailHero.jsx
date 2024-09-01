import { Box, Button, Grid, Typography, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

export const CourseDetailHero = () => {
  return (
    <Grid color={'white'} item xs={12}>
      <Grid alignItems={'center'} paddingY={15} container>
        <Grid item xs={5}>
          <Stack gap>
            <Typography variant="h2">$74.99</Typography>
            <Typography variant="h4">
              Indoor Gardening and Hydroponics
            </Typography>
            <Typography variant="bsr">
              Learn about various types of hydroponic setups, nutrient
              solutions, lighting, and plant care techniques hands-on projects
              to design and build a personal hydroponic garden
            </Typography>
            <Typography  variant="bsr">
              Created by: <Link >Emily Greene</Link>
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={2} />
        <Grid item xs={5}>
          <Box display={'flex'} flexDirection={'column'} gap={1}>
            <Box height={'330px'} bgcolor={'yellow'}>
              cat
            </Box>
            <Box display={'flex'} flexDirection={'column'} gap={1}>
              <Button color="secondary" variant="contained">
                Enroll Now
              </Button>
              <Button variant="contained">Add to Wishlist</Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};
