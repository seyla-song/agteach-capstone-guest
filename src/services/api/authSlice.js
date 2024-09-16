import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'http://localhost:3001',
    credentials: 'include', // Move this line here
  }),
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (signupData) => ({
        url: 'signup',
        method: 'POST',
        body: signupData,
      }),
    }),
    login: builder.mutation({
      query: (loginData) => ({
        url: '/api/users/login',
        method: 'POST',
        body: loginData,
      }),
    }),

    // login: builder.mutation({
    //   query: (loginData) => ({
    //     url: '/api/users/login',
    //     method: 'POST',
    //     body: loginData,
    //     // credentials: "include",              
    //     // headers: {
    //     //   'getSetCookie': 'true',
    //     // }
        
    //   }),
    // }),


    forgotPassword: builder.mutation({
      query: (email) => ({
        url: 'api/users/forgotPassword',
        method: 'POST',
        body: email,
      }),
    }),
    

  }),
});

export const { useSignupMutation, useForgotPasswordMutation, useLoginMutation,  } = apiSlice;
