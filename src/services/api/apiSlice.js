// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

// export const apiSlice = createApi({
//   reducerPath: "api",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "http://localhost:3001",
//   }),
//   endpoints: (builder) => ({
//     signup: builder.mutation({
//       query: (signupData) => ({
//         url: "cards",
//         method: "POST",
//         body: signupData,
//       }),
//     }),
//     showDummy: builder.query({
//       query: () => "cards",
//     }),
//   }),
// });

// export const { useShowDummyQuery, useSignupMutation } = apiSlice;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (signupData) => ({
        url: '/signup',  // Ensure this matches your actual endpoint
        method: 'POST',
        body: signupData,
      }),
    }),
    showDummy: builder.query({
      query: () => 'cards',
    }),
    getCard: builder.query({
      query: () => ({
        url: `cards`,
      }),
    })
  }),
});

export const { useShowDummyQuery, useSignupMutation, useGetCardQuery } = apiSlice;
