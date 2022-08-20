import { createSlice } from "@reduxjs/toolkit";

export const userAuth = createSlice({
  name: "user",
  initialState: {
    user: {},
    isAuthenticated: false,
    session_id: "",
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.session_id = localStorage.getItem("session_id");

      localStorage.setItem("account_id", action.payload.id);
    },
  },
});

export const { setUser } = userAuth.actions;

export default userAuth.reducer;

export const userSelector = (state) => state.user;
