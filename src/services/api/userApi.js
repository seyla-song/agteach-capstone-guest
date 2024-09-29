//  https://api.agteach.site
//  http://localhost:3001

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  tagTypes: ["User"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.agteach.site",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    updatePassword: builder.mutation({
      query: (passwordData) => ({
        url: "/api/users/updatePassword",
        method: "PATCH",
        body: passwordData,
      }),
      invalidatesTags: ["User"],
    }),

    updateInfo: builder.mutation({
      query: (infoData) => ({
        url: "/api/customer/updateMe",
        method: "PATCH",
        body: infoData,
      }),
      invalidatesTags: ["User"],
    }),

    getUserInfo: builder.query({
      query: () => ({
        url: "/api/customer/getMe/additionalInfo",
        method: "GET",
      }),
      providesTags: ["User"],
    }),
  }),
});

export const {
  useUpdatePasswordMutation,
  useGetUserInfoQuery,
  useUpdateInfoMutation,
} = userApi;
