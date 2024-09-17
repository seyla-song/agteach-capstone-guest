import { createSlice } from "@reduxjs/toolkit";
import Cookies from 'js-cookie'

const getTokenFromCookies = () => {
    const token = Cookies.get('jwt')
    return token
}

const initialState = {
    isAuthenticated: !!getTokenFromCookies(),
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.isAuthenticated = true
        },
        logout: (state, action) => {
            state.isAuthenticated = false
        },
    },
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer