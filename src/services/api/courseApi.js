import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../../constants/apiConstants";

export const courseApi = createApi({
  reducerPath: "courseApi", // Match this with store setup
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: (builder) => ({
    searchCourse: builder.query({
      query: (name) => ({
        url: `/api/course/searchData?name=${name}`,
        method: "GET",
      }),
    }),

    getCourseCarousel: builder.query({
      query: () => ({
        url: "/api/course/getAllCourse?page=1",
        method: "GET",
      }),
    }),

    getRecommendedCourses: builder.query({
      query: (courseId) => ({
        url: `/api/course/getRecommendCourse/${courseId}`,
        method: "GET",
      }),
    }),

    getOneCourse: builder.query({
      query: (courseId) => ({
        url: `/api/course/getOneCourse/${courseId}`,
        method: "GET",
      }),
    }),
    getEnrollmentCourse: builder.query({
      query: (courseId) => ({
        url: `/api/course/getEnrollmentCourse/${courseId}`,
        method: "GET",
        credentials: "include",
      }),
    }),
  }),
});

export const {
  useSearchCourseQuery,
  useGetCourseCarouselQuery,
  useGetRecommendedCoursesQuery,
  useGetOneCourseQuery,
  useGetEnrollmentCourseQuery
} = courseApi;
