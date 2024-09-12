import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (signupData) => ({
        url: 'signup',
        method: 'POST',
        body: signupData,
      }),
    }),
    getCard: builder.query({
      query: () => 'card',
      // method: 'GET',
    }),
    updateCard: builder.mutation({
      query: (cardData) => ({
        url: 'card',
        method: 'PATCH',
        body: cardData,
      }),
    }),

  }),
});

export const { useSignupMutation, useGetCardQuery, useUpdateCardMutation } = apiSlice;
