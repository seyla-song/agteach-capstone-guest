import { Divider, Grid, Stack } from '@mui/material';
import {
  CourseDetailHero,
  CourseDetailHighlight,
  CourseDetailContent,
} from '../components/CourseDetail/index';
import MemberComponent from '../components/MemberComponent';
import {
  useGetRecommendedCoursesQuery,
  useGetOneCourseQuery,
} from '../services/api/courseApi';
import { SuggestedCourseProduct } from '../components/SuggestCourseProduct';
import { useEffect, useState, Fragment } from 'react';
import { useParams } from 'react-router';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

function shuffle(array) {
  const newArray = [...array]; // Create a copy of the array

  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // Swap elements
  }

  return newArray; // Return the shuffled copy
}

const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);

function CourseDetailPage() {
  const { coursesId } = useParams();

  const [recommendedCourses, setRecommendedCourses] = useState([]);
  const {
    data: currentCourseData,
    isLoading: isCurrentCourseDataLoading,
    isError: isCurrentCourseError,
    error: currentCoursesError,
  } = useGetOneCourseQuery(coursesId);
  const { data: recommendedCoursesData } =
    useGetRecommendedCoursesQuery(coursesId);

  useEffect(() => {

    if (recommendedCoursesData) {
      setRecommendedCourses(shuffle(recommendedCoursesData.data));
    }

    window.scrollTo(0, 0);
  }, [recommendedCoursesData, currentCourseData]);

  if (isCurrentCourseDataLoading)
    return (
      <div
        style={{
          width: '100%',
          height: 'calc(100vh - 68px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        Loading...
      </div>
    );
  if (isCurrentCourseError)
    return (
      <div
        style={{
          width: '100%',
          height: 'calc(100vh - 68px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        Error: {currentCoursesError}
      </div>
    );
  if (!currentCourseData)
    return (
      <div
        style={{
          width: '100%',
          height: 'calc(100vh - 68px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        Course Not Found.
      </div>
    );

  return (
    <Elements stripe={stripePromise}>
      <Stack alignItems="center">
        <Stack width="100%" alignItems="center" bgcolor={'primary.dark'}>
          <Grid sx={{ maxWidth: '1420px' }} container paddingX={1}>
            {/* <CourseDetailHero courseData={currentCourseData?.data} /> */}
          </Grid>
        </Stack>
        {/* <Grid sx={{ maxWidth: '1420px' }} container paddingX={1}>
          <CourseDetailHighlight courseData={currentCourseData?.data} />
          <CourseDetailContent
            sections={currentCourseData?.data?.sections}
            numberOfVideos={currentCourseData?.data?.numberOfVideo}
            courseLength={currentCourseData?.data?.duration}
          />
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <SuggestedCourseProduct
            courses={recommendedCourses}
            products={currentCourseData?.data?.product_suggestions}
          />
          <Grid item xs={12} pt={10} pb={20}>
            <MemberComponent />
          </Grid>
        </Grid> */}
      </Stack>
    </Elements>
  );
}

export default CourseDetailPage;
