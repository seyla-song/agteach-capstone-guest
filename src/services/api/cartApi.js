import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const cartApi = createApi({
  reducerPath: 'cartApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.agteach.site',
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
