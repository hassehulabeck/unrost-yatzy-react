import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import yatzyReducer from "../features/counter/yatzySlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        yatzy: yatzyReducer,
    },
});