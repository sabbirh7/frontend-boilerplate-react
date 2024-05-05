import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "../features/api/apiSlice";
import rootReducer from "./rootReducer";

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([apiSlice.middleware])
});