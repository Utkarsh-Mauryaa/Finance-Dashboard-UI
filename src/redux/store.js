import { configureStore } from "@reduxjs/toolkit";
import slice from "./reducer/slice";

const store = configureStore({
    reducer: {
        [slice.name]: slice.reducer,
    },
});


export default store;
