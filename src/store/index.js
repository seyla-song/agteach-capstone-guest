import { configureStore as createStore } from "@reduxjs/toolkit";
import userReducer from "../services/api/userSlice";

import { apiSlice } from "../services/api/authSlice";
import dobSlice from "../store/slices/dobSlice";
import authSlice from "../store/slices/authSlice";

export const store = createStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [dobSlice.name]: dobSlice,
    [authSlice.name]: authSlice,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});