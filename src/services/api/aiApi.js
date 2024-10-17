import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from '../../constants/apiConstants';

export const aiApi = createApi({
  reducerPath: 'aiApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
  }),
  endpoints: (builder) => ({
    predictImage: builder.mutation({
      query: (formData) => ({
        url: '/',
        method: 'POST',
        body: formData,
      }),
    }),
  }),
});

export const { usePredictImageMutation } = aiApi;
