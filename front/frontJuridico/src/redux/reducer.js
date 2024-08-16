import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id_user: localStorage.getItem("id_user") || null,
  name: localStorage.getItem("name") || null,
  isLogin: localStorage.getItem("isLogin") === "true" || false,
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginIn: (state, action) => {
      state.id_user = action.payload.id_user;
      state.name = action.payload.nombre;
      state.isLogin = true;
      localStorage.setItem("id_user", action.payload.id_user);
      localStorage.setItem("name", action.payload.nombre);
      localStorage.setItem("isLogin", true);
    },
    logout: (state) => {
      state.id = null;
      state.name = null;
      state.isLogin = false;
      localStorage.removeItem("id_user");
      localStorage.removeItem("name");
      localStorage.removeItem("isLogin");
    },
  },
});
export const { loginIn, logout } = userSlice.actions;
export default userSlice.reducer;
