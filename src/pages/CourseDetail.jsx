import { Divider, Grid, Stack } from '@mui/material';
import {
  CourseDetailHero,
  CourseDetailHighlight,
  CourseDetailContent,
} from '../components/CourseDetail/index';
import MemberComponent from '../components/MemberComponent';
import { useGetRecommendedCourseQuery } from '../services/api/courseApi';
import { useGetRecommendedProductsQuery } from '../services/api/productApi';

import { SuggestedCourseProduct } from '../components/SuggestCourseProduct';
import { useEffect, useState } from 'react';

function shuffle(array) {
  const newArray = [...array]; // Create a copy of the array

  for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // Swap elements
  }
  
  return newArray; // Return the shuffled copy
};

function CourseDetailPage() {
  const [recommendedCourses, setRecommendedCourses] = useState([]);
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  const {data: recommendedCoursesData, isLoading: isRecommendedCoursesLoading, isError: isRecommendedCoursesError, error: recommendedCoursesError } = useGetRecommendedCourseQuery();
  const {data: recommendedProductsData, isLoading: isRecommendedProductsLoading, isError: isRecommendedProductsError, error: recommendedProductsError } = useGetRecommendedProductsQuery();

  useEffect(() => {
    if (recommendedCoursesData) { 
      setRecommendedCourses(shuffle(recommendedCoursesData.data));
      console.log('course: ', recommendedCoursesData.data)
    }

    if (recommendedProductsData) { 
      setRecommendedProducts(shuffle(recommendedProductsData.data));
      console.log('product: ', recommendedProductsData.data)
    }
  },[recommendedCoursesData, recommendedProductsData] );
  
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
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <SuggestedCourseProduct courses={recommendedCourses} products={recommendedProducts} />
        <Grid item xs={12} pt={10} pb={20}>
          <MemberComponent />
        </Grid>
      </Grid>
    </Stack>
  );
}

export default CourseDetailPage;

// const products = [
//   {
//     name: 'Grow Lights - LED or fluorescent grow lights',
//     price: '$10',
//     image: 'https://via.placeholder.com/150',
//   },
//   {
//     name: 'Grow Lights - LED or fluorescent grow lights',
//     price: '$15',
//     image: 'https://via.placeholder.com/150',
//   },
//   {
//     name: 'Grow Lights - LED or fluorescent grow lights',
//     price: '$20',
//     image: 'https://via.placeholder.com/150',
//   },
//   {
//     name: 'Grow Lights - LED or fluorescent grow lights',
//     price: '$25',
//     image: 'https://via.placeholder.com/150',
//   },
//   {
//     name: 'Grow Lights - LED or fluorescent grow lights',
//     price: '$30',
//     image: 'https://via.placeholder.com/150',
//   },
//   {
//     name: 'Product 6',
//     price: '$35',
//     image: 'https://via.placeholder.com/150',
//   },
//   {
//     name: 'Product 7',
//     price: '$40',
//     image: 'https://via.placeholder.com/150',
//   },
//   {
//     name: 'Product 8',
//     price: '$45',
//     image: 'https://via.placeholder.com/150',
//   },
// ];
// const courses = [
//   {
//     name: 'Indoor Plant Propagation Techniques',
//     instructor: 'Emily Greene',
//     image: 'https://via.placeholder.com/150',
//   },
//   {
//     name: 'Vertical Gardening for Urban Spaces',
//     instructor: 'Emily Greene',
//     image: 'https://via.placeholder.com/150',
//   },
//   {
//     name: 'Organic Indoor Plant Care and Maintenance',
//     instructor: 'Emily Greene',
//     image: 'https://via.placeholder.com/150',
//   },
//   {
//     name: 'Advanced Indoor Plant Lighting Strategies',
//     instructor: 'Emily Greene',
//     image: 'https://via.placeholder.com/150',
//   },
//   {
//     name: 'Product 5',
//     instructor: 'Emily Greene',
//     image: 'https://via.placeholder.com/150',
//   },
//   {
//     name: 'Product 6',
//     instructor: 'Emily Greene',
//     image: 'https://via.placeholder.com/150',
//   },
//   {
//     name: 'Product 7',
//     instructor: 'Emily Greene',
//     image: 'https://via.placeholder.com/150',
//   },
//   {
//     name: 'Product 8',
//     instructor: 'Emily Greene',
//     image: 'https://via.placeholder.com/150',
//   },
// ];
