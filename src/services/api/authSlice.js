import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import ResetPasswordPage from "../../pages/ResetPassword";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (signupData) => ({
        url: "/api/users/signup",
        method: "POST",
        body: signupData,
      }),
    }),

    forgotpassword: builder.mutation({
      query: (forgotpasswordData) => ({
        url: "forgotpassword",
        method: "POST",
        body: forgotpasswordData,
      }),
    }),

    verifyEmail: builder.mutation({
      query: (emailVerifyCode) => ({
        url: "/api/users/verifyEmail",
        method: "POST",
        body: { emailVerifyCode },
      }),
    }),

    resendVerifyCode: builder.mutation({
      query: (email) => ({
        url: "/api/users/resendCode",
        method: "POST",
        body: { email },
      }),
    }),
  }),
});

export const {
  useSignupMutation,
  useForgotpasswordMutation,
  useVerifyEmailMutation,
  useResendVerifyCodeMutation
} = apiSlice;
