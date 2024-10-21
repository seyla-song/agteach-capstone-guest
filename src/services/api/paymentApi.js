import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from '../../constants/apiConstants';

export const paymentApi = createApi({
  reducerPath: 'paymentApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    credentials: 'include',
  }),
  endpoints: (builder) => ({
    getPaymentSession: builder.query({
      query: (sessionId) => ({
        url: `/api/payments/session/${sessionId}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetPaymentSessionQuery } = paymentApi;
