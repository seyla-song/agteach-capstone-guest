import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const purchasedApi = createApi({
  reducerPath: 'purchasedApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.agteach.site',
    // baseUrl: 'http://localhost:3001',
    credentials: 'include',
  }),
  endpoints: (builder) => ({
    purchased: builder.mutation({
      query: (purchasedData) => ({
        url: '/api/purchased/productCheckoutSession',
        method: 'POST',
        body: purchasedData,
      }),
    }),
  }),
});

export const { usePurchasedMutation } = purchasedApi;
