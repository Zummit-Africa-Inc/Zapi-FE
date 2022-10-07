import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

import apiReducer from "./slices/apiSlice";
import notificationReducer from "./slices/notificationSlice";
import userReducer from "./slices/userSlice";
import modalReducer from "./slices/modalSlice";
import endpointReducer from "./slices/endpointSlice";
import analyticReducer from "./slices/analyticSlice";  

export const store = configureStore({
    reducer: {
        apis: apiReducer,
        user: userReducer,
<<<<<<< HEAD
        endpoints: endpointReducer,
        notifications: notificationReducer,
=======
        modal: modalReducer,
        endpoints: endpointReducer,
        analytics: analyticReducer
>>>>>>> c89ab490304cb3afb17a1f90f58af9280294ec68
    },
    devTools: import.meta.env.VITE_ENV !== 'production'
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
export type AppDispatch = typeof store.dispatch