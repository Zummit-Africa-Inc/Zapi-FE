import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "universal-cookie";

import { UserProfileType } from "../../types";

const url = ""
const cookies = new Cookies()
const userId = cookies.get("userId")

interface UserState {
    user: UserProfileType
    loading: "idle" | "pending" | "fulfilled" | "rejected"
    error?: any
    isLoggedIn: boolean
}

const initialState = {
    user: {},
    loading: "idle",
    error: null,
    isLoggedIn: false
} as UserState

export const getUserProfile = createAsyncThunk("user/getuserprofile", async(_, thunkAPI) => {
    try {
        const response = await fetch(`${url}/profile/${userId}`)
        const data = await response.json()
        return data
    } catch (error: any) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

const userSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getUserProfile.pending, state => {
            state.loading = "pending"
        }),
        builder.addCase(getUserProfile.fulfilled, (state, { payload }) => {
            state.loading = "fulfilled"
            state.user = payload
        }),
        builder.addCase(getUserProfile.rejected, (state, { payload }) => {
            state.loading = "rejected"
            state.error = payload
        })
    },
    reducers: {
        clearError: state => {
            state.error = null
        },
        login: (state, { payload }) => {
            state.user = payload
            state.isLoggedIn = true
            localStorage.setItem("zapi_user", JSON.stringify(payload))
        },
        logout: state => {
            state.isLoggedIn = false
            state.user = initialState.user
            localStorage.removeItem("zapi_user")
        }
    },
})

export const { clearError, login, logout } = userSlice.actions
export default userSlice.reducer