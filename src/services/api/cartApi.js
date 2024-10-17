import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from '../../constants/apiConstants';

export const cartApi = createApi({
  reducerPath: 'cartApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    // baseUrl: 'http://localhost:3001',
  }),
  endpoints: (builder) => ({
    getCartItems: builder.mutation({
      query: (cartItems) => ({
        url: '/api/cart/getCartItems',
        method: 'POST',
        body: cartItems,
      }),
    }),
  }),
});

export const { useGetCartItemsMutation } = cartApi;
