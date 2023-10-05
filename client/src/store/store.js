import { configureStore } from "@reduxjs/toolkit";
import tempReducer from "./tempAction";

export const store = configureStore({
    reducer: tempReducer
});