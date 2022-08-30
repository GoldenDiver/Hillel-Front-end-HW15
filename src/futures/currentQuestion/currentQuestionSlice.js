import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentQuestion: 1,
};

export const currentQuestionSlice = createSlice({
  name: "currentQuestion",
  initialState,
  reducers: {
    setCurrentQuestion: (state, action) => {
      state.currentQuestion = action.payload;
    },
  },
});

export const { setCurrentQuestion } = currentQuestionSlice.actions;
export default currentQuestionSlice.reducer;
