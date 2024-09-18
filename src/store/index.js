import { configureStore as createStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";

import { apiSlice } from "../services/api/authSlice";
import authSlice from "../store/slices/authSlice";

export const store = createStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSlice,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
