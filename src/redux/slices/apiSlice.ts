import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { APIType } from "../../types";
// import { headers } from "./constant";
import Cookies from "universal-cookie";
const cookies = new Cookies();
const url = import.meta.env.VITE_CORE_URL;
interface ApiState {
  apis: Array<APIType>;
  categories: Array<APIType>;
  loading: "idle" | "pending" | "fulfilled" | "rejected";
  error?: any;
}

const initialState = {
  apis: [],
  categories: [],
  loading: "idle",
  error: null,
} as ApiState;

export const getApiCategories = createAsyncThunk(
  "apis/getApiCategories",
  async (_, thunkAPI) => {
    const headers = {
      "X-Zapi-Auth-Token": `Bearer ${cookies.get("accessToken")}`,
    };
    try {
      const response = await fetch(`${url}/categories`, { headers });
      const data = await response.json();
      return data.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getValidCategories = createAsyncThunk(
  "apis/getValidCategories",
  async (_, thunkAPI) => {
    const headers = {
      "X-Zapi-Auth-Token": `Bearer ${cookies.get("accessToken")}`,
    };
    try {
      const response = await fetch(`${url}/categories/valid-categories`, {
        headers,
      });
      const data = await response.json();
      return data.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getPopularApis = createAsyncThunk(
  "apis/getPopularApis",
  async (_, thunkAPI) => {
    const headers = {
      "X-Zapi-Auth-Token": `Bearer ${cookies.get("accessToken")}`,
    };
    try {
      const response = await fetch(`${url}/api/popular-apis`, { headers });
      const data = await response.json();
      return data.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getApis = createAsyncThunk("apis/getApis", async (_, thunkAPI) => {
  const headers = {
    "X-Zapi-Auth-Token": `Bearer ${cookies.get("accessToken")}`,
  };
  try {
    const response = await fetch(`${url}/api?limit=100`, { headers });
    const data = await response.json();
    return data.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const apiSlice = createSlice({
  name: "apis",
  initialState,
  reducers: {
    addApi: (state, action: PayloadAction<any>) => {
      state.apis.unshift(action.payload);
    },
    removeApi: (state, action: PayloadAction<any>) => {
      const id = action.payload;
      state.apis = state.apis.filter((apis) => apis?.id !== id);
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getApis.pending, (state) => {
      state.loading = "pending";
    }),
      builder.addCase(getApis.fulfilled, (state, { payload }) => {
        state.apis = payload;
        state.loading = "fulfilled";
      }),
      builder.addCase(getApis.rejected, (state, action: PayloadAction<any>) => {
        state.loading = "rejected";
        state.error = action.payload;
      }),
      builder.addCase(getApiCategories.pending, (state) => {
        state.loading = "pending";
      }),
      builder.addCase(getApiCategories.fulfilled, (state, { payload }) => {
        state.categories = payload;
        state.loading = "fulfilled";
      }),
      builder.addCase(
        getApiCategories.rejected,
        (state, action: PayloadAction<any>) => {
          state.loading = "rejected";
          state.error = action.payload;
        }
      );
    builder.addCase(getPopularApis.pending, (state) => {
      state.loading = "pending";
    }),
      builder.addCase(getPopularApis.fulfilled, (state, { payload }) => {
        state.categories = payload;
        state.loading = "fulfilled";
      }),
      builder.addCase(
        getPopularApis.rejected,
        (state, action: PayloadAction<any>) => {
          state.loading = "rejected";
          state.error = action.payload;
        }
      );
    builder.addCase(getValidCategories.pending, (state) => {
      state.loading = "pending";
    }),
      builder.addCase(getValidCategories.fulfilled, (state, { payload }) => {
        state.categories = payload;
        state.loading = "fulfilled";
      }),
      builder.addCase(
        getValidCategories.rejected,
        (state, action: PayloadAction<any>) => {
          state.loading = "rejected";
          state.error = action.payload;
        }
      );
  },
});

export const { addApi, removeApi, clearError } = apiSlice.actions;
export default apiSlice.reducer;
