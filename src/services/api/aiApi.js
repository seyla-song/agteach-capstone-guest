import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const aiApi = createApi({
  reducerPath: 'aiApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://ai.agteach.site',
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