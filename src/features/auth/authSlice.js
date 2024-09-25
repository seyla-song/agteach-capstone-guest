import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    checkLoginStatus: (state, action) => {
      state.isAuthenticated = action.payload;
    },
  },
});

export const { checkLoginStatus } = authSlice.actions;
export default authSlice.reducer;
