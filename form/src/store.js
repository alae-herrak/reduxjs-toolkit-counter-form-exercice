import { configureStore } from "@reduxjs/toolkit";
import isLoggedSlice from "./redux/isLoggedSlice";
import infoPersonSlice from "./redux/infoPersonSlice";

export const store = configureStore({
  reducer: {
    isLogged: isLoggedSlice,
    infoPerson: infoPersonSlice,
  },
});
