import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const dummy = [
  {
    id: 1,
    name: "Grow Lights - LED or fluorescent grow lights",
  },
  {
    id: 2,
    name: "Grow Lights - LED or fluorescent grow lights", 
  },
]

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com/todos",
  }),
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (signupData) => ({
        url: "/users",
        method: "POST",
        body: signupData,
      }),
    }),
    showDummy: builder.query({
      query: () => '/users',
    }),
  }),
});
// console.log(apiSlice.useSignupMutation);

export const { useShowDummyQuery } = apiSlice;
