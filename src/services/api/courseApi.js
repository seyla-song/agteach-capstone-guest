import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const courseApi = createApi({
  reducerPath: "courseApi", // Match this with store setup
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.agteach.site" }),
  endpoints: (builder) => ({
    searchCourse: builder.query({
      query: (name) => ({
        url: `/api/course/searchData?name=${name}`,
        method: "GET",
      }),
    }),

    getCourseCarousel: builder.query({
      query: () => ({
        url: "/api/course/getAllCourse",
        method: "GET",
      }),
    }),
  }),
});

export const { useSearchCourseQuery, useGetCourseCarouselQuery } = courseApi;
