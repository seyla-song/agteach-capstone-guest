import { configureStore as createStore } from '@reduxjs/toolkit';
import { apiSlice } from '../services/api/authApi';
import { userApi } from '../services/api/userApi';
import { aiApi } from '../services/api/aiApi';
import { productApi } from '../services/api/productApi';
import { courseApi } from '../services/api/courseApi';
import { instructorApi } from '../services/api/instructorApi';
import { enrollmentApi } from '../services/api/enrollmentApi';
import { purchasedApi } from '../services/api/purchasedApi';
import { cartApi } from '../services/api/cartApi';
import { locationApi } from '../services/api/locationApi';

import userSlice from '../features/auth/userSlice';
import authSlice from '../features/auth/authSlice';
import cartSlice from '../features/cart/cartSlice';

import { loadCartState, saveCartState } from '../utils/cartPersistence';
import { paymentApi } from '../services/api/paymentApi';

const persistedCartState = loadCartState();

export const store = createStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [aiApi.reducerPath]: aiApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [courseApi.reducerPath]: courseApi.reducer,
    [instructorApi.reducerPath]: instructorApi.reducer,
    [enrollmentApi.reducerPath]: enrollmentApi.reducer,
    [purchasedApi.reducerPath]: purchasedApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
    [paymentApi.reducerPath]: paymentApi.reducer,
    [locationApi.reducerPath]: locationApi.reducer,

    auth: authSlice,
    user: userSlice,
    cart: cartSlice,
  },

  preloadedState: persistedCartState ? { cart: persistedCartState } : undefined,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      apiSlice.middleware,
      userApi.middleware,
      productApi.middleware,
      courseApi.middleware,
      aiApi.middleware,
      enrollmentApi.middleware,
      purchasedApi.middleware,
      instructorApi.middleware,
      cartApi.middleware,
      paymentApi.middleware,
      locationApi.middleware,
    ),
});

store.subscribe(() => {
  saveCartState(store.getState().cart);
});
