import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi", // Match this with store setup
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.agteach.site" }),
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

    getRecommendedProducts: builder.query({
      query: (productId) => ({
        url: "/api/product/getAllProduct",
        method: "GET",
      }),
    }),

    getOneProduct: builder.query({
      query: (id) => ({
        url: `/api/product/getProductDetail/${id}`,
        method: "GET"
      }),
    }),

  }),
});

export const { useSearchProductQuery, useGetProductCarouselQuery, useGetRecommendedProductsQuery, useGetOneProductQuery } = productApi;
