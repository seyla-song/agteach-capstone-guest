import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// //  https://api.agteach.site
// //  http://localhost:3001

export const apiSlice = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.agteach.site",
    // baseUrl: "http://localhost:3001",
    credentials: "include",
  }),
  tagTypes: ["Auth"],
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (signupData) => ({
        url: "/api/users/signup",
        method: "POST",
        body: signupData,
      }),
    }),

    login: builder.mutation({
      query: (loginData) => ({
        url: "/api/users/login",
        method: "POST",
        body: loginData,
        headers: { "X-Frontend-URL": window.location },
      }),
      invalidatesTags: ["Auth"],
    }),

    logout: builder.mutation({
      query: () => ({
        url: "/api/users/logout",
        method: "POST",
      }),
      invalidatesTags: ["Auth"],
    }),

    forgotPassword: builder.mutation({
      query: (email) => ({
        url: "/api/users/forgotPassword",
        method: "POST",
        body: email,
      }),
    }),

    resetPassword: builder.mutation({
      query: (resetData) => ({
        url: `/api/users/resetPassword/${resetData.resetToken}`,
        method: "PATCH",
        body: resetData.body,
      }),
      invalidatesTags: ["Auth"],
    }),

    addPersonalInfo: builder.mutation({
      query: (personalInfoData) => ({
        url: "/api/users/signup/additionalInfo",
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
        body: {email},
      }),
    }),

    isLogin: builder.query({
      query: () => ({
        url: "/api/users/isLoginedIn",
        method: "GET",
      }),
      providesTags: ["Auth"],
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
  useLogoutMutation,
  useIsLoginQuery,
} = apiSlice;
