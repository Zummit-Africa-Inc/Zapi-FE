import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

import apiReducer from "./slices/apiSlice";
import userReducer from "./slices/userSlice";
import modalReducer from "./slices/modalSlice";

export const store = configureStore({
    reducer: {
        apis: apiReducer,
        user: userReducer,
        modal: modalReducer
    },
    devTools: import.meta.env.VITE_ENV !== 'production'
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
export type AppDispatch = typeof store.dispatch