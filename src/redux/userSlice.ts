import { createSlice } from "@reduxjs/toolkit";
import { UserDetails } from "../types";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: {
      name: "",
      email: "",
      mobile: "",
      token: "",
    }
  },
  reducers: {
    changeName: (state, action) => {
      state.value.name = action.payload;
    },
    changeMobile: (state, action) => {
      state.value.mobile = action.payload;
    },
    changeToken: (state, action) => {
      state.value.token = action.payload;
    },
    changeUser: (state, action) => {
      state.value = { ...action.payload };      
    }
  },
});

export const { changeName, changeMobile, changeToken, } = userSlice.actions;
export default userSlice.reducer;