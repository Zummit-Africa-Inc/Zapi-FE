import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

import apiReducer from "./slices/apiSlice";
import userReducer from "./slices/userSlice";
import endpointReducer from "./slices/endpointSlice";

export const store = configureStore({
    reducer: {
        apis: apiReducer,
        user: userReducer,
        endpoints: endpointReducer
    },
    devTools: import.meta.env.VITE_ENV !== 'production'
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
export type AppDispatch = typeof store.dispatch