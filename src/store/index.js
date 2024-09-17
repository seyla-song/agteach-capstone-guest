import { configureStore as createStore } from "@reduxjs/toolkit";
import userReducer from "../services/api/userSlice";

import { apiSlice } from "../services/api/authSlice";

export const store = createStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
