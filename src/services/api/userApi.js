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
    

  }),
});

export const {
  useUpdatePasswordMutation
} = userApi;
