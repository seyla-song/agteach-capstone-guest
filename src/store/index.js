import { configureStore as createStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";

import { apiSlice } from "../services/api/authSlice";
import authSlice from "../store/slices/authSlice";
import { userApi } from "../services/api/userApi";

export const store = createStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [userApi.reducerPath]: userApi.reducer,
    auth: authSlice,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
  .concat(apiSlice.middleware)
  .concat(userApi.middleware),
});
