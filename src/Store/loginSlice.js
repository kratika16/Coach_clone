import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Action } from "@remix-run/router";
import {Buffer} from 'buffer';
import { isEmpty } from "lodash";
import { deleteLoginAuth, getLoginAuth, getUser, setLoginAuth, setUsers, updateUser } from "../utils/func";
 
const userauth=getLoginAuth();

const initialState = {
  isAuthenticated: !isEmpty(userauth),
  auth: userauth,
  error: {}
}

export const handleSignup = createAsyncThunk('signup', async (data, {rejectWithValue}) => {
  try {
    const user = getUser(data);
    if(!user) {
      return await new Promise(resolve  => setTimeout(() => {
        resolve({
          id: Math.ceil(Math.random() * 90000),
          ...data,
         token: Buffer.from(`${new Date().getMilliseconds()}`).toString('base64')
        })
      }, 2000))
    }
    throw Error('Already registered');
  } catch (error) {
    console.log(error);
    return rejectWithValue(error);
  }
})


export const handleLogin = createAsyncThunk('login', async (data, {rejectWithValue}) => {
  try {
    const user = getUser(data);
    if(user) {
      return await new Promise(resolve  => setTimeout(() => {
        resolve({
          ...user,
         token: Buffer.from(`${new Date().getMilliseconds()}`).toString('base64')
        })
      }, 2000))
    }
    throw Error('Invalid Credentials');
  } catch (error) {
    console.log(error);
    return rejectWithValue(error);
  }
})




export const AuthSlice = createSlice({
    name: "user",
    initialState,
   
    reducers:{
    handleLogout:(state,action) => {
      state.isAuthenticated = false
        state.auth = {}
        deleteLoginAuth();
    },
    handleProfileUpdate: (state, {payload}) => {
      console.log('dsjsjds', payload);
      state.auth = payload;
      updateUser(payload);
      
    }
    },
    extraReducers: {
      [handleSignup.fulfilled] : (state,{payload}) => {
        state.isAuthenticated = true;
         state.auth = payload;
         setUsers(payload);
       },
       [handleSignup.rejected] : (state, {payload}) => {
         state.isAuthenticated=false;
         state.error = payload;
       },
      [handleLogin.fulfilled] : (state,{payload}) => {
       state.isAuthenticated = true;
        state.auth = payload;
        setLoginAuth(payload);
      },
      [handleLogin.rejected] : (state, {payload}) => {
        state.isAuthenticated=false;
        state.error = payload;
      },
    
    }
});

export const {reducer} =AuthSlice;
export const {handleLogout, handleProfileUpdate}=AuthSlice.actions
export default reducer;

