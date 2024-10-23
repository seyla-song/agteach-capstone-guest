import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../../constants/apiConstants";

export const productApi = createApi({
  reducerPath: "productApi", // Match this with store setup
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: (builder) => ({
    searchProduct: builder.query({
      query: ({query, limits,page}) => ({
        url: `/api/product/searchData?name=${query}&limit=${limits}&page=${page}`,
        method: "GET",
      }),
    }),
    

    getProductCarousel: builder.query({
      query: () => ({
        url: "/api/product/getAllProduct?page=1",
        method: "GET",
      }),
    }),

    getRecommendedProducts: builder.query({
      query: (productId) => ({
        url: `/api/product/getRecommendProduct/${productId}`,
        method: "GET",
      }),
    }),

    getOneProduct: builder.query({
      query: (id) => ({
        url: `/api/product/getProductDetail/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useSearchProductQuery,
  useGetProductCarouselQuery,
  useGetRecommendedProductsQuery,
  useGetOneProductQuery,
} = productApi;
