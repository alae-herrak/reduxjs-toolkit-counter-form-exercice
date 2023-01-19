import { createSlice } from "@reduxjs/toolkit";
const initState = {
  infoPerson: {
    fullName: "",
    email: "",
    phoneNumber: "",
  },
};

const infoPersonSlice = createSlice({
  name: "infoPerson",
  initialState: initState,
  reducers: {
    saveInfo: (state, action) => {
      state.infoPerson = {
        fullName: action.payload.fullname,
        email: action.payload.email,
        phoneNumber: action.payload.phoneNumber,
      };
    },
    resetInfo: (state) => {
      state.infoPerson = {
        fullName: "",
        email: "",
        phoneNumber: "",
      };
    },
  },
});

export default infoPersonSlice.reducer;
export const { saveInfo, resetInfo } = infoPersonSlice.actions;
