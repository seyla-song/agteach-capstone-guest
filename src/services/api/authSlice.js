import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

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
      }),
    }),

    forgotpassword: builder.mutation({
      query: (forgotpasswordData) => ({
        url: "/api/users/forgotPassword",
        method: "POST",
        body: forgotpasswordData,
      }),
    }),

    login: builder.mutation({
      query: (loginData) => ({
        url: "/api/users/login",
        method: "POST",
        body: loginData,
      }),
    }),

    forgotPassword: builder.mutation({
      query: (email) => ({
        url: "api/users/forgotPassword",
        method: "POST",
        body: email,
      }),
    }),

    resetPassword: builder.mutation({
      query: (resetData) => ({
        url: `api/users/resetPassword/${resetData.resetToken}`,
        method: "PATCH",
        body: resetData.body,
      }),
    }),

    addPersonalInfo: builder.mutation({
      query: (personalInfoData) => ({
        url: "api/users/personalInfo",
        method: "POST",
        body: personalInfoData,
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
  useForgotPasswordMutation,
  useLoginMutation,
  useResetPasswordMutation,
  useAddPersonalInfoMutation,
  useVerifyEmailMutation,
  useResendVerifyCodeMutation,
} = apiSlice;
