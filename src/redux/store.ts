import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

import apiReducer from "./slices/apiSlice";
import userReducer from "./slices/userSlice";
<<<<<<< HEAD
import modalReducer from "./slices/modalSlice";
=======
import endpointReducer from "./slices/endpointSlice";
>>>>>>> staging

export const store = configureStore({
    reducer: {
        apis: apiReducer,
        user: userReducer,
<<<<<<< HEAD
        modal: modalReducer
=======
        endpoints: endpointReducer
>>>>>>> staging
    },
    devTools: import.meta.env.VITE_ENV !== 'production'
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
export type AppDispatch = typeof store.dispatch