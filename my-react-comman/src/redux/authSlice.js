import { createSlice } from "@reduxjs/toolkit";

const storedUser = JSON.parse(localStorage.getItem("userData")) || null;

const initialState = {
  user: storedUser,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registerUser: (state, action) => {
      state.user = action.payload;
    //   console.log("===", action.payload);
     localStorage.setItem("userData", JSON.stringify(action.payload));
    },
    logoutUser: (state) => {
      state.user = null;
      localStorage.removeItem("userData");
    },
  },
});

export const { registerUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
