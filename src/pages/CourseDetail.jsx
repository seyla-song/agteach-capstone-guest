import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import { Divider, Grid, Stack } from "@mui/material";

import { useGetUserEnrollmentsQuery } from "../services/api/enrollmentApi";
import {
  useGetRecommendedCoursesQuery,
  useGetOneCourseQuery,
} from "../services/api/courseApi";

import {
  ContentLoading,
  SuggestedCourseProduct,
  CourseDetailHighlight,
  CourseDetailContent,
  CourseDetailHero,
  MemberComponent,
  CustomFaq,
} from '../components/index';
import { setCourseId } from '../features/auth/userSlice';
import { useDispatch } from 'react-redux';

const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);

function CourseDetailPage() {
  const { coursesId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  dispatch(setCourseId(coursesId));

  const [recommendedCourses, setRecommendedCourses] = useState([]);

  const {
    data: enrolledCourses,
    isLoading: isLoadingEnrolled,
  } = useGetUserEnrollmentsQuery();

  const {
    data: currentCourseData,
    isLoading,
    isError,
  } = useGetOneCourseQuery(coursesId);

  const { data: recommendedCoursesData, isError: isRecommendedError } =
    useGetRecommendedCoursesQuery(coursesId);

  useEffect(() => {
    if (
      !isLoadingEnrolled &&
      enrolledCourses?.courseIds.includes(Number(coursesId))
    ) {
      // navigate(`/courses/${coursesId}/watch/overview`);
    }
    if (recommendedCoursesData) {
      setRecommendedCourses(recommendedCoursesData.data);
    }
    window.scrollTo(0, 0);
  }, [
    recommendedCoursesData,
    currentCourseData,
    enrolledCourses,
    coursesId,
    isLoadingEnrolled,
    isLoading,
    navigate,
  ]);

  if (isLoading) return <ContentLoading />;

  if (isError || isRecommendedError) {
    return navigate("/course-not-found");
  }
  return (
    <Elements stripe={stripePromise}>
      <Stack alignItems="center">
        <Stack width="100%" alignItems="center" bgcolor={"primary.dark"}>
          <Grid sx={{ maxWidth: "1420px" }} container paddingX={1}>
            <CourseDetailHero courseData={currentCourseData?.data} />
          </Grid>
        </Stack>
        <Grid sx={{ maxWidth: "1420px" }} container paddingX={1}>
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
          <Grid item xs={12} pt={10}>
            <MemberComponent />
          </Grid>
          <Grid item xs={12} py={10}>
            <CustomFaq />
          </Grid>
        </Grid>
      </Stack>
    </Elements>
  );
}

export default CourseDetailPage;
