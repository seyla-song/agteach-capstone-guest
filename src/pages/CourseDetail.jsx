import {
  Box,
  CircularProgress,
  Container,
  Divider,
  Grid,
  Skeleton,
  Stack,
  Typography,
} from '@mui/material';
import {
  CourseDetailHighlight,
  CourseDetailContent,
  CourseDetailHero,
} from '../components/CourseDetail/index';
import MemberComponent from '../components/MemberComponent';
import {
  useGetRecommendedCoursesQuery,
  useGetOneCourseQuery,
} from '../services/api/courseApi';
import { SuggestedCourseProduct } from '../components/SuggestCourseProduct';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { ContentLoading } from '../components/ContentLoading';

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
      setRecommendedCourses(recommendedCoursesData.data);
    }

    window.scrollTo(0, 0);
  }, [recommendedCoursesData, currentCourseData]);

  if (isCurrentCourseDataLoading) return <ContentLoading />;
  if (isCurrentCourseError) return <div>Error: {currentCoursesError}</div>;

  return (
    <Elements stripe={stripePromise}>
      <Stack alignItems="center">
        <Stack width="100%" alignItems="center" bgcolor={'primary.dark'}>
          <Grid sx={{ maxWidth: '1420px' }} container paddingX={1}>
            <CourseDetailHero courseData={currentCourseData?.data} />
          </Grid>
        </Stack>
        <Grid sx={{ maxWidth: '1420px' }} container paddingX={1}>
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
        </Grid>
      </Stack>
    </Elements>
  );
}

export default CourseDetailPage;
