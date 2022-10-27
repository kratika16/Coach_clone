import { createSlice } from "@reduxjs/toolkit";

export const LoginSlice = createSlice({
    name: "user",
    initialState:{
        isAuthenticated: false,
        user:null
    },
    reducers:{
        login: (state) => {
            state.user = state.user;
            state.isAuthenticated = true;
            console.log("LOGIN", state);
          },
          logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
          }
    }
});

export const {login, logout} =LoginSlice.actions;
export const selectUser = (state)=> state.user.isAuthenticated;
export default LoginSlice.reducer;