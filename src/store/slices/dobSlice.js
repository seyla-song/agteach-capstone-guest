import { createSlice } from "@reduxjs/toolkit";

const dobSlice = createSlice({
    name: "dob",
    initialState: {
        value: "",
    },
    reducers: {
        setDob: (state, action) => {
            state.value = action.payload;
        },
    },
});

export default dobSlice.reducer;
export const { setDob } = dobSlice.actions;