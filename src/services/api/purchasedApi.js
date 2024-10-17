import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from '../../constants/apiConstants';

export const purchasedApi = createApi({
  reducerPath: 'purchasedApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
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
