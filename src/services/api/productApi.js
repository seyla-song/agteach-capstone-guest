import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: 'productApi',  // Match this with store setup
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
  endpoints: (builder) => ({
    getAllProduct: builder.query({
      query: (name) => ({
        url: `/api/product/searchData?name=${name}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllProductQuery } = productApi;
