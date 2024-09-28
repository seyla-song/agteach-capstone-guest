import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const courseApi = createApi({
  reducerPath: 'courseApi',  // Match this with store setup
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
  endpoints: (builder) => ({
    searchCourse: builder.query({
      query: (name) => ({
        url: `/api/course/searchData?name=${name}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useSearchCourseQuery } = courseApi;