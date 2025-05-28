import { configureStore } from "@reduxjs/toolkit";
import comboReducer from "./Comboslice";

export const store = configureStore({
    reducer: {
        combo: comboReducer,
    },
});