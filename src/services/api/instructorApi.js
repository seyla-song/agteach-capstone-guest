import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../../constants/apiConstants";

export const instructorApi = createApi({
  reducerPath: "instructorApi", // Match this with store setup
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
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
