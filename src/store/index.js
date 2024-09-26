import { configureStore as createStore } from "@reduxjs/toolkit";
import { apiSlice } from "../services/api/authApi";
import { userApi } from "../services/api/userApi";
import { productApi } from '../services/api/productApi';
import { courseApi } from '../services/api/courseApi';
import userSlice from "../features/auth/userSlice";
import authSlice from "../features/auth/authSlice";

export const store = createStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [courseApi.reducerPath]: courseApi.reducer,
    auth: authSlice,
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(apiSlice.middleware, userApi.middleware, productApi.middleware, courseApi.middleware,),
});
