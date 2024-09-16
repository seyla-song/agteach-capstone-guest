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

    forgotPassword: builder.mutation({
      query: (email) => ({
        url: 'api/users/forgotPassword',
        method: 'POST',
        body: email,
      }),
    }),
    

  }),
});

export const { useSignupMutation, useForgotPasswordMutation, } = apiSlice;
