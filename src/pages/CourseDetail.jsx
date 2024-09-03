import { Grid, Stack } from '@mui/material';
import {
  CourseDetailHero,
  CourseDetailHighlight,
  CourseDetailContent,
  SuggestedCourseProduct,
} from '../components/CourseDetail/index';

function CourseDetailPage() {
  return (
    <Stack alignItems="center">
      <Stack width="100%" alignItems="center" bgcolor={'primary.dark'}>
        <Grid sx={{ maxWidth: '1420px' }} container paddingX={1}>
          <CourseDetailHero />
        </Grid>
      </Stack>
      <Grid sx={{ maxWidth: '1420px' }} container paddingX={1}>
        <CourseDetailHighlight />
        <CourseDetailContent />
        <SuggestedCourseProduct courses={courses} products={products} />
        <Grid border={'1px solid black'} item xs={12}>
          Become a member - Get Components from chitra
        </Grid>
      </Grid>
    </Stack>
  );
}

export default CourseDetailPage;

const products = [
  {
    name: 'Grow Lights - LED or fluorescent grow lights',
    price: '$10',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Grow Lights - LED or fluorescent grow lights',
    price: '$15',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Grow Lights - LED or fluorescent grow lights',
    price: '$20',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Grow Lights - LED or fluorescent grow lights',
    price: '$25',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Grow Lights - LED or fluorescent grow lights',
    price: '$30',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Product 6',
    price: '$35',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Product 7',
    price: '$40',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Product 8',
    price: '$45',
    image: 'https://via.placeholder.com/150',
  },
];
const courses = [
  {
    name: 'Indoor Plant Propagation Techniques',
    instructor: 'Emily Greene',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Vertical Gardening for Urban Spaces',
    instructor: 'Emily Greene',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Organic Indoor Plant Care and Maintenance',
    instructor: 'Emily Greene',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Advanced Indoor Plant Lighting Strategies',
    instructor: 'Emily Greene',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Product 5',
    instructor: 'Emily Greene',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Product 6',
    instructor: 'Emily Greene',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Product 7',
    instructor: 'Emily Greene',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Product 8',
    instructor: 'Emily Greene',
    image: 'https://via.placeholder.com/150',
  },
];
