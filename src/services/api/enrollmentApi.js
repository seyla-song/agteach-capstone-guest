import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const enrollmentApi = createApi({
  reducerPath: 'enrollmentApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.agteach.site',
    credentials : 'include'
  }),
  endpoints: (builder) => ({
    enrollment: builder.mutation({
      query: (enrollmentData) => ({
        url: '/api/enrollment/checkoutSession',
        method: 'POST',
        body: enrollmentData,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const { useEnrollmentMutation } = enrollmentApi;
