import { createSlice } from "@reduxjs/toolkit";

const initialState = { result: [] };

export const resultSlice = createSlice({
  name: "result",
  initialState,
  reducers: {
    setResult: (state, action) => {
      state.result = [action.payload];
    },
    addResult: (state, action) => {
      state.result.push(action.payload);
    },
  },
});

export const { addResult, setResult } = resultSlice.actions;
export default resultSlice.reducer;
