import { createSlice } from "@reduxjs/toolkit";
const initState = { counter: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState: initState,
  reducers: {
    incrementCount: (state, action) => {
      state.counter += action.payload;
    },
    decrementCount: (state, action) => {
      state.counter -= action.payload;
    },
    resetCount: (state) => {
      state.counter = 0;
    },
  },
});

export default counterSlice.reducer;
export const { incrementCount, decrementCount, resetCount } =
  counterSlice.actions;
