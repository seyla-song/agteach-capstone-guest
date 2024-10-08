import { Divider, Grid, Stack } from '@mui/material';
import {
  CourseDetailHero,
  CourseDetailHighlight,
  CourseDetailContent,
} from '../components/CourseDetail/index';
import MemberComponent from '../components/MemberComponent';
import { useGetRecommendedCoursesQuery, useGetOneCourseQuery } from '../services/api/courseApi';
import { useGetProductCarouselQuery } from '../services/api/productApi';
import { SuggestedCourseProduct } from '../components/SuggestCourseProduct';
import { useEffect, useState, Fragment } from 'react';
import { useParams } from 'react-router';

function shuffle(array) {
  const newArray = [...array]; // Create a copy of the array

  for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // Swap elements
  }
  
  return newArray; // Return the shuffled copy
};

function CourseDetailPage() {
  const { courseId } = useParams();

  const [recommendedCourses, setRecommendedCourses] = useState([]);
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  const {data: currentCourseData, isLoading: isCurrentCourseData, isError: isCurrentCourseError, error: currentCoursesError } = useGetOneCourseQuery(courseId);
  const {data: recommendedCoursesData, isLoading: isRecommendedCoursesLoading, isError: isRecommendedCoursesError, error: recommendedCoursesError } = useGetRecommendedCoursesQuery(courseId);
  const {data: recommendedProductsData, isLoading: isRecommendedProductsLoading, isError: isRecommendedProductsError, error: recommendedProductsError } = useGetProductCarouselQuery();

  useEffect(() => {
    console.clear()

    if (currentCourseData) console.log(currentCourseData)

    if (recommendedCoursesData) { 
      setRecommendedCourses(shuffle(recommendedCoursesData.data));
      console.log('course: ', recommendedCoursesData.data)
    }

    if (recommendedProductsData) { 
      setRecommendedProducts(shuffle(recommendedProductsData.data));
      console.log('product: ', recommendedProductsData.data)
    }
  },[recommendedCoursesData, recommendedProductsData, currentCourseData] );
  
  let content;

  if (isCurrentCourseData) content = <div style={{width: '100%', height: 'calc(100vh - 68px)', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Loading...</div>
  
  else if (isCurrentCourseData) content = <div style={{width: '100%', height: 'calc(100vh - 68px)', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Error: {currentCoursesError}</div>
  
  else if (!currentCourseData) content = <div style={{width: '100%', height: 'calc(100vh - 68px)', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Product Not Found.</div>

  else if (currentCourseData) content = <Stack alignItems="center">
                                    <Stack width="100%" alignItems="center" bgcolor={'primary.dark'}>
                                      <Grid sx={{ maxWidth: '1420px' }} container paddingX={1}>
                                        <CourseDetailHero courseData={currentCourseData?.data}/>
                                      </Grid>
                                    </Stack>
                                    <Grid sx={{ maxWidth: '1420px' }} container paddingX={1}>
                                      <CourseDetailHighlight courseData={currentCourseData?.data}/>
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

  return (
    <Fragment>
      {content}
    </Fragment>
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
