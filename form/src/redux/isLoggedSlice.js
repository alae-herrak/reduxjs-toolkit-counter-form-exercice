import { createSlice } from "@reduxjs/toolkit";
const initState = { isLogged: false };

const isLoggedSlice = createSlice({
  name: "isLogged",
  initialState: initState,
  reducers: {
    logIn: (state) => {
      state.isLogged = true;
    },
    logOut: (state) => {
      state.isLogged = false;
    },
  },
});

export default isLoggedSlice.reducer;
export const { logIn, logOut } = isLoggedSlice.actions;
