import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

import apiReducer from "./slices/apiSlice";

export const store = configureStore({
    reducer: {
        apis: apiReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;