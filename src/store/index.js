import { configureStore as createStore } from "@reduxjs/toolkit";
import { apiSlice } from "../services/api/authApi";
import { userApi } from "../services/api/userApi";
import userSlice from "../features/auth/userSlice";
import authSlice from "../features/auth/authSlice";

export const store = createStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [userApi.reducerPath]: userApi.reducer,
    auth: authSlice,
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(apiSlice.middleware, userApi.middleware),
});
