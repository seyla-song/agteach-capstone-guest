import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiVerifySlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
  endpoints: (builder) => ({
    verifyEmail: builder.mutation({
      query: (verificationData) => ({
        url: "/verify-email",
        method: "POST",
        body: verificationData,
      }),
    }),
  }),
});

export const { useVerifyEmailMutation } = apiVerifySlice;
