import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi", // Match this with store setup
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }), 
  // baseQuery: fetchBaseQuery({ baseUrl: "https://api.agteach.site" }),
  endpoints: (builder) => ({
    searchProduct: builder.query({
      query: (name) => ({
        url: `/api/product/searchData?name=${name}`,
        method: "GET",
      }),
    }),

    getProductCarousel: builder.query({
      query: () => ({
        url: "/api/product/getAllProduct",
        method: "GET",
      }),
    }),

  }),
});

export const { useSearchProductQuery, useGetProductCarouselQuery } = productApi;
