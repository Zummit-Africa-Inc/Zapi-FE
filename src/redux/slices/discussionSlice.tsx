import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "universal-cookie";

import { APIType, DiscussionType } from "../../types";

const core_url = import.meta.env.VITE_CORE_URL
const cookies = new Cookies()

interface DiscussionState {
    discussion: Array<DiscussionType>
    loading: "idle" | "pending" | "fulfilled" | "rejected"
    error?: any
}

const initialState: DiscussionState = {
    discussion: [],
    loading: "idle",
    error: null,
}

export const getDiscussions = createAsyncThunk("apis/getDiscussion", async(_, thunkAPI) => {
    const headers = { 'X-Zapi-Auth-Token': `Bearer ${cookies.get('accessToken')}` }
    try {
        const response = await fetch(`${core_url}/api/discussion`, {headers})//sendRequest() function needs to replace this
        const data = await response.json()
        return data
    } catch (error: any) {
        return thunkAPI.rejectWithValue(error.message)
    }
})


const discussionSlice = createSlice({
    name: "discussion",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getDiscussions.pending, state => {
            state.loading = "pending"
        }),
        builder.addCase(getDiscussions.fulfilled, (state, action: PayloadAction<any>) => {
            state.loading = "fulfilled"
            state.discussion = action.payload
        }),
        builder.addCase(getDiscussions.rejected, (state, action: PayloadAction<any>) => {
            state.loading = "rejected"
            state.error = action.payload
        })
    },
    reducers: {
        clearError: state => {
            state.error = null
        },
        addDiscussion:  (state, action: PayloadAction<any>) => {
            state.discussion.unshift(action.payload)
        },
        
    },
})

export const { clearError, addDiscussion } = discussionSlice.actions
export default discussionSlice.reducer
