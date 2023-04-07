import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./CartSlice";

const store = configureStore({
    reducer: counterSlice.reducer
})

export default store;