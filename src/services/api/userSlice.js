import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "", // You can add more user-related data here as needed
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    clearUser: (state) => {
      state.email = "";
    },
  },
});

export const { setEmail, clearUser } = userSlice.actions;
export default userSlice.reducer;
