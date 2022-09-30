import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "universal-cookie";

import { UserProfileType, APIType } from "../../types";

const core_url = import.meta.env.VITE_CORE_URL
const identity_url = import.meta.env.VITE_IDENTITY_URL
const cookies = new Cookies()
const userId = cookies.get("userId")
const profileId = cookies.get("profileId")

interface UserState {
    user: UserProfileType | Object
    userApis: Array<APIType | null>
    loading: "idle" | "pending" | "fulfilled" | "rejected"
    error?: any
    isLoggedIn: boolean
}

const initialState: UserState = {
    user: {},
    loading: "idle",
    error: null,
    isLoggedIn: false,
    userApis: [],
}

export const getUserProfile = createAsyncThunk("user/getprofile", async(_, thunkAPI) => {
    try {
        const response = await fetch(`${identity_url}/profile/${userId}`)
        const data = await response.json()
        return data
    } catch (error: any) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const getUserApis = createAsyncThunk("user/getapis", async(_, thunkAPI) => {
    try {
        const response = await fetch(`${core_url}/api/dev-platform-data/${profileId}`)
        const data = await response.json()
        const apis = data?.data
        return apis
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
        builder.addCase(getUserProfile.fulfilled, (state, action: PayloadAction<any>) => {
            state.loading = "fulfilled"
            state.user = action.payload
        }),
        builder.addCase(getUserProfile.rejected, (state, action: PayloadAction<any>) => {
            state.loading = "rejected"
            state.error = action.payload
        }),
        builder.addCase(getUserApis.fulfilled, (state, action: PayloadAction<any>) => {
            state.userApis = action.payload
        })
    },
    reducers: {
        clearError: state => {
            state.error = null
        },
        login: (state, action: PayloadAction<any>) => {
            state.user = action.payload
            state.isLoggedIn = true
            localStorage.setItem("zapi_user", JSON.stringify(action.payload))
        },
        logout: state => {
            state.isLoggedIn = false
            state.user = initialState.user
            localStorage.removeItem("zapi_user")
        },
        addEndpoint: (state, action: PayloadAction<any>) => {
            const { apiId, name, method, route, description, headers, requestBody } = action.payload
            const api = state.userApis.find(api => api?.id === apiId)
            let newEndpoint = {name, method, route, description, headers, requestBody}
            if(api) {
                api.endpoints?.unshift(newEndpoint)
            }
        },
        removeEndpoint: (state, action: PayloadAction<any>) => {
            const { apiId, id } = action.payload
            const api = state.userApis.find(api => api?.id === apiId)
            if(api) {
                api.endpoints = api.endpoints?.filter(endpoint => endpoint?.id !== id)
            }
        },
        editEndpoint: (state, action: PayloadAction<any>) => {
            const { apiId, id, name, method, route, description, headers, requestBody } = action.payload
            const api = state.userApis.find(api => api?.id === apiId)
            if(api) {
                let endpoint = api.endpoints?.find(endpoint => endpoint?.id === id)
                if(endpoint) {
                    endpoint.name = name
                    endpoint.method = method
                    endpoint.route = route
                    endpoint.description = description
                    endpoint.headers = headers
                    endpoint.requestBody = requestBody
                }
            }
        }
    },
})

export const { clearError, login, logout, addEndpoint, removeEndpoint, editEndpoint } = userSlice.actions
export default userSlice.reducer