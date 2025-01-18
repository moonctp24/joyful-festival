import { createSlice } from "@reduxjs/toolkit";

const initialLoginState = {
  isLogin: false,
  userEmail: "",
  userName: "",
  accessToken: "",
  refreshToken: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState: initialLoginState,
  reducers: {
    login: (state, action) => {
      state.isLogin = true;
      state.userEmail = action.payload.userEmail;
      state.userName = action.payload.userName;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      localStorage.setItem("isLogin", "Y");
      localStorage.setItem("userEmail", action.payload.userEmail);
      localStorage.setItem("userName", action.payload.userName);
      localStorage.setItem("accessToken", action.payload.accessToken);
      localStorage.setItem("refreshToken", action.payload.refreshToken);
      // console.log("login action setToken()");
    },
    logout: (state) => {
      state.isLogin = false;
      state.userEmail = initialLoginState.userEmail;
      state.userName = initialLoginState.userName;
      state.accessToken = initialLoginState.accessToken;
      state.refreshToken = initialLoginState.refreshToken;

      localStorage.removeItem("isLogin");
      localStorage.removeItem("userEmail");
      localStorage.removeItem("userName");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      // console.log("logout action removeToken()");
    },
  },
});

export const loginAction = loginSlice.actions;

export default loginSlice;
