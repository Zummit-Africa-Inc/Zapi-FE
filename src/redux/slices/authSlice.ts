import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

const initialState = {
    user: {},
    isLoggedIn: false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<{}>) => {
            state.user = action.payload
            state.isLoggedIn = true
        },
        logout: (state) => {
            state.user = initialState.user
            state.isLoggedIn = false
        }
    }
});

export const { login, logout } = authSlice.actions
export default authSlice.reducer
export const selectAuth = (state: RootState) => state.auth