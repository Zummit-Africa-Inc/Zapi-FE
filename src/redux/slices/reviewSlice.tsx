import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "universal-cookie";

import { ReviewsType } from "../../types"

const core_url = import.meta.env.VITE_CORE_URL
const cookies = new Cookies()

interface ReviewsState {
    reviews: Array<ReviewsType | null>
    loading: "idle" | "pending" | "fulfilled" | "rejected"
    error?: any
}

const initialState: ReviewsState = {
    reviews: [],
    loading: "idle",
    error: null,
}

export const getReviews = createAsyncThunk("/getapireviews", async (apiId: any, thunkAPI) => {
    const headers = { 'X-Zapi-Auth-Token': `Bearer ${cookies.get('accessToken')}` }
    try {
        const response = await fetch(`${core_url}/dev-platform-data/reviews/api/${apiId}`, { headers })//sendRequest() function needs to replace this
        const data = await response.json()
        const reviews = data?.data.discussions
        return reviews
    } catch (error: any) {
        return thunkAPI.rejectWithValue(error.message)
    }
})


const reviewsSlice = createSlice({
    name: "reviews",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getReviews.pending, state => {
            state.loading = "pending"
        }),
            builder.addCase(getReviews.fulfilled, (state, action: PayloadAction<any>) => {
                state.loading = "fulfilled"
                state.reviews = action.payload
            }),
            builder.addCase(getReviews.rejected, (state, action: PayloadAction<any>) => {
                state.loading = "rejected"
                state.error = action.payload
            })
    },
    reducers: {
        clearError: state => {
            state.error = null
        },
        addReviews: (state, action: PayloadAction<any>) => {
            state.reviews.unshift(action.payload)
        },
        removeReviews: (state, action: PayloadAction<any>) => {
            const id = action.payload
            state.reviews = state.reviews.filter(reviews => reviews?.id !== id)

        },
        editReviews: (state, action: PayloadAction<any>) => {
            const { id, title, body, createdOn } = action.payload
            const reviews = state.reviews.find(reviews => reviews?.id === id)
            if (reviews) {
                reviews.title = title
                reviews.body = body
                reviews.createdOn = createdOn
            }
        },

    },
})

export const { clearError, addReviews, removeReviews, editReviews } = reviewsSlice.actions
export default reviewsSlice.reducer
