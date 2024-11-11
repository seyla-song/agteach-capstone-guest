import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AI_API_URL } from '../../constants/apiConstants';

export const aiApi = createApi({
  reducerPath: 'aiApi',
  baseQuery: fetchBaseQuery({
    baseUrl: AI_API_URL,
  }),
  endpoints: (builder) => ({
    predictImage: builder.mutation({
      query: (formData) => ({
        url: '/predict',
        method: 'POST',
        body: formData,
      }),
    }),
  }),
});

export const { usePredictImageMutation } = aiApi;
