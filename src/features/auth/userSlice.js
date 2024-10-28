import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "", // You can add more user-related data here as needed
  dob: "",
  courseId: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setDob: (state, action) => {
      state.dob = action.payload;
    },
    setCourseId: (state, action) => {
      state.courseId = action.payload;
    },
    clearUser: (state) => {
      state.email = "";
      state.dob = "";
    },
  },
});

export const { setEmail, setDob, setCourseId, clearUser } = userSlice.actions;
export default userSlice.reducer;
