import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const instructorApi = createApi({
  reducerPath: "instructorApi", // Match this with store setup
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.agteach.site" }), 
  endpoints: (builder) => ({
    getInstructor: builder.query({
      query: (id) => ({
        url: `/api/instructor/getInstructorDetail/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetInstructorQuery } = instructorApi;
