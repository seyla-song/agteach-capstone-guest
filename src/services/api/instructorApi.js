import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const instructorApi = createApi({
  reducerPath: "instructorApi", // Match this with store setup
  // baseQuery: fetchBaseQuery({ baseUrl: "https://api.agteach.site" }),
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }), 
  endpoints: (builder) => ({
    getInstructor: builder.query({
      query: (id) => ({
        url: `/api/instructor/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetInstructorQuery } = instructorApi;
