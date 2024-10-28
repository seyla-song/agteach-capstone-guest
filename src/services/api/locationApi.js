import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../../constants/apiConstants";

export const locationApi = createApi({
  reducerPath: "locationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    credentials: "include", // Move this line here
  }),
  endpoints: (builder) => ({
    
    getLocations: builder.query({
      query: () => ({
        url: "/api/users/getLocation",
        method: "GET",
      }),
    }),
    
  }),
});

export const {
  useGetLocationsQuery
} = locationApi;