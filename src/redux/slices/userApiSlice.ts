import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "universal-cookie";

import { APIResponseType } from "../../types";

const url = import.meta.env.VITE_BASE_URL
const cookies = new Cookies ()
const profileId = cookies.get("profileId")

interface UserApiState {
    userApi: APIResponseType[]
    loading: "idle" | "pending" | "fulfilled" | "rejected"
    error?: any
}

const initialState = {
    userApi: [],
    loading: "idle",
    error: null
} as UserApiState

export const getUserApi = createAsyncThunk("userApi/getUserApi", async(_, thunkAPI) => {
    try {
        const response = await fetch(`${url}/api/${profileId}/myapis`)
        const data = await response.json()
        return data.data
    } catch (error: any) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

const userApiSlice = createSlice({
    name: "userApi",
    initialState,
    reducers: {
        clearError: (state) => {
            state.error = null
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getUserApi.pending, (state) => {
            state.loading = "pending"
        }),
        builder.addCase(getUserApi.fulfilled, (state, { payload }) => {
            state.userApi = payload
            state.loading = "fulfilled"
        }),
        builder.addCase(getUserApi.rejected, (state, action: PayloadAction<any>) => {
            state.loading = "rejected"
            state.error = action.payload
        })
    }
})

export const { clearError } = userApiSlice.actions
export default userApiSlice.reducer