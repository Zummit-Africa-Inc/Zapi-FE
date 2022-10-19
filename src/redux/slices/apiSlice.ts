import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { APIType } from "../../types";

const url = import.meta.env.VITE_CORE_URL
interface ApiState {
    apis: Array<APIType>
    categories: Array<APIType>
    loading: "idle" | "pending" | "fulfilled" | "rejected"
    error?: any
}

const initialState = {
    apis: [],
    categories: [],
    loading: "idle",
    error: null
} as ApiState

export const getApiCategories = createAsyncThunk("apis/getApiCategories", async(_, thunkAPI) => {
    try {
        const response = await fetch(`${url}/categories`)
        const data = await response.json()
        return data.data
    } catch (error: any) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const getApis = createAsyncThunk("apis/getApis", async(_, thunkAPI) => {
    try {
        const response = await fetch(`${url}/api`)
        const data = await response.json()
        return data.data
    } catch (error: any) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

const apiSlice = createSlice({
    name: "apis",
    initialState,
    reducers: {
        addApi: (state, action: PayloadAction<any>) => {
            state.apis.unshift(action.payload)
        },
        clearError: (state) => {
            state.error = null
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getApis.pending, (state) => {
            state.loading = "pending"
        }),
        builder.addCase(getApis.fulfilled, (state, { payload }) => {
            state.apis = payload
            state.loading = "fulfilled"
        }),
        builder.addCase(getApis.rejected, (state, action: PayloadAction<any>) => {
            state.loading = "rejected"
            state.error = action.payload
        }),
        builder.addCase(getApiCategories.pending, (state) => {
            state.loading = "pending"
        }),
        builder.addCase(getApiCategories.fulfilled, (state, { payload }) => {
            state.categories = payload
            state.loading = "fulfilled"
        }),
        builder.addCase(getApiCategories.rejected, (state, action: PayloadAction<any>) => {
            state.loading = "rejected"
            state.error = action.payload
        })
    }
})

export const { addApi, clearError } = apiSlice.actions
export default apiSlice.reducer