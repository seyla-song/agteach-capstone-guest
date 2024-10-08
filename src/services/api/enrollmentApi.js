import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const enrollmentApi = createApi({
  reducerPath: 'enrollmentApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.agteach.site',
  }),
  endpoints: (builder) => ({
    enrollment: builder.mutation({
      query: (enrollmentData) => ({
        url: '/api/enrollment/checkout-session',
        method: 'POST',
        body: enrollmentData,
      }),
    }),
  }),
});

export const { useEnrollmentMutation } = enrollmentApi;
