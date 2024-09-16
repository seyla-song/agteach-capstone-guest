import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import ResetPasswordPage from '../../pages/ResetPassword';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
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
        // credentials: "include",              
        // headers: {
        //   'getSetCookie': 'true',
        // }
        
      }),
    }),


    forgotpassword: builder.mutation({
      query: (forgotpasswordData) => ({
        url: 'forgotpassword',
        method: 'POST',
        body: forgotpasswordData,
      }),
    }),
    

  }),
});

export const { useSignupMutation, useForgotpasswordMutation, useLoginMutation,  } = apiSlice;
