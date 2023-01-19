import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./redux/counterSlice";
import isLoggedSlice from "./redux/isLoggedSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    isLogged: isLoggedSlice
  },
});
