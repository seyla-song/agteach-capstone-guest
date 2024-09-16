import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import ResetPasswordPage from "../../pages/ResetPassword";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (signupData) => ({
        url: "/api/users/signup",
        method: "POST",
        body: signupData,
        // credentials: 'include',
      }),
    }),

    forgotpassword: builder.mutation({
      query: (forgotpasswordData) => ({
        url: "forgotpassword",
        method: "POST",
        body: forgotpasswordData,
      }),
    }),
  }),
});

export const { useSignupMutation, useForgotpasswordMutation } = apiSlice;
