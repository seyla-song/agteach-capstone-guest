//  https://api.agteach.site
//  http://localhost:3001

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
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
    }),

    updateInfo: builder.mutation({
      query: (infoData) => ({
        url: "/api/customer/updateMe",
        method: "PATCH",
        body: infoData,
      }),
    }),

    getUserInfo: builder.query({

      query: () => ({
        url: "/api/customer/getMe/additionalInfo",
        method: "GET",
      }),
    }),
  }),
});

export const { useUpdatePasswordMutation, useGetUserInfoQuery, useUpdateInfoMutation } = userApi;
