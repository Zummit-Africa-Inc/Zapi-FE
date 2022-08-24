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
}

const initialState = {
    user: {},
    loading: "idle",
    error: null
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
            state.user = payload
            state.loading = "fulfilled"
        }),
        builder.addCase(getUserProfile.rejected, (state, { payload }) => {
            state.error = payload
            state.loading = "rejected"
        })
    },
    reducers: {
        clearError: state => {
            state.error = null
        }
    },
})

export const { clearError } = userSlice.actions
export default userSlice.reducer