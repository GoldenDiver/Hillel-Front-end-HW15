import { configureStore } from "@reduxjs/toolkit";
import currentQuestionSlice from "../futures/currentQuestion/currentQuestionSlice";
import resultSlice from "../futures/result/resultSlice";
import titleSlice from "../futures/title/titleSlice";

export const store = configureStore({
  reducer: {
    title: titleSlice,
    result: resultSlice,
    currentQuestion: currentQuestionSlice,
  },
});
