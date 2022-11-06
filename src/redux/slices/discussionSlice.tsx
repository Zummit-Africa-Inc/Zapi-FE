import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "universal-cookie";
import { mockDiscussions } from "../../components/mockDiscussion";

import {APIType, DiscussionType } from "../../types";

const core_url = import.meta.env.VITE_CORE_URL
const cookies = new Cookies()
const apiId = ''

interface DiscussionState {
    discussions: Array<DiscussionType | null>
    // discussionApi: Array<APIType>
    loading: "idle" | "pending" | "fulfilled" | "rejected"
    error?: any
}

const initialState: DiscussionState = {
    discussions: [{id:'001', title:'Cannot Subscribe', body:"It shows an error during payment… i have tried entering multiple times"}],
    loading: "idle",
    error: null,
    // discussionApi: []
}

export const getDiscussions = createAsyncThunk("/getapidiscussions", async(apiId: any, thunkAPI) => {
    const headers = { 'X-Zapi-Auth-Token': `Bearer ${cookies.get('accessToken')}` }
    try {
        const response = await fetch(`${core_url}/discussion/${apiId}`, {headers})//sendRequest() function needs to replace this
        const data = await response.json()
        const discussions = data?.data.discussions
        return discussions
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
            state.discussions = action.payload
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
            state.discussions.unshift(action.payload)
            // const { apiId, title, body } = action.payload
            // const api = state.discussionApi.find(api => api?.id === apiId)
            // let newDiscussion = {title, body}
            // if(api) {
            //     api.discussions?.unshift(newDiscussion)
            // }
        },
        removeDiscussion: (state, action: PayloadAction<any>) => {
            const id = action.payload
            state.discussions = state.discussions.filter(discussion => discussion?.id !== id)
            // const { apiId, id } = action.payload
            // const api = state.discussionApi.find(api => api?.id === apiId)
            // if(api) {
            //     api.discussions = api.discussions?.filter(discussion => discussion?.id !== id)
            // }
        },
        editDiscussion: (state, action: PayloadAction<any>) => {
            const { id, title, body, createdOn } = action.payload
            const discussion = state.discussions.find(discussion => discussion?.id === id)
            if(discussion) {
                discussion.title = title
                discussion.body = body
                discussion.createdOn = createdOn
            }

            // const { apiId, id, title, body } = action.payload
            // const api = state.discussionApi.find(api => api?.id === apiId)
            // if(api) {
            //     let discussion = api.discussions?.find(discussion => discussion?.id === id)
            //     if(discussion) {
            //         discussion.title = title
            //         discussion.body = body
            //     }
            // }
        },
        
    },
})

export const { clearError, addDiscussion,removeDiscussion, editDiscussion } = discussionSlice.actions
export default discussionSlice.reducer
