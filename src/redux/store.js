import { configureStore } from "@reduxjs/toolkit";
import slice from "./reducer/adminCheck.slice";
import themeSlice from "./reducer/theme.slice";

const store = configureStore({
  reducer: {
    [slice.name]: slice.reducer,
    [themeSlice.name]: themeSlice.reducer,
  },
});

export default store;