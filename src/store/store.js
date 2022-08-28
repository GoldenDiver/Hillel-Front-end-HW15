import { configureStore } from "@reduxjs/toolkit";
import titleSlice from "../futures/title/titleSlice";

export const store = configureStore({
  reducer: {
    title: titleSlice,
  },
});