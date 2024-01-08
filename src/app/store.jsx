import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice"
const store = configureStore({
    reducer:{
        auth: authReducer,
    },
    devTools: process.env.Node_ENV !== "production",
})
export default store;