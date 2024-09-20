// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const userApi = createApi({
//   reducerPath: "api",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "http://localhost:3001",
//     credentials: "include",
//   }),

//   endpoints: (builder) => ({
//     updatePassword: builder.mutation({
//       query: () => ({
//         url: "/api/users/updatePassword",
//         method: "PATCH",
//       }),
//     }),

//   }),
// });

// export const { useUpdatePasswordMutation } = userApi;

//  https://api.agteach.site
//  http://localhost:3001

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001",
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
