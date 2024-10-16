import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const cartApi = createApi({
  reducerPath: 'cartApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001',
  }),
  endpoints: (builder) => ({
    getCartItems: builder.query({
      query: (cartItems) => ({
        url: '/api/cart/getCartItems',
        method: 'GET',
        body: cartItems,
      }),
    }),
  }),
});

export const { useGetCartItemsQuery } = cartApi;
