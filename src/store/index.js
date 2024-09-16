import { configureStore as createStore } from "@reduxjs/toolkit";

import { apiSlice } from "../services/api/authSlice";
import dobSlice from "../store/slices/dobSlice";

export const store = createStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [dobSlice.name]: dobSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});