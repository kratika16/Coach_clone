import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const defaultLoginDetails = {
  id: '1',
  email: 'abhishek@gmail.com',
  password: 'Abhishek@1234'
}

const initialState = {
  isAuthenticated: false,
  auth: {},
  error: {}
}

export const handleSignup = createAsyncThunk('signup', async (data, {rejectWithValue}) => {
  var Buffer = require('buffer/').Buffer
  try {
    console.log('condition',data);
    if(data.email && data.password ) {
      return await new Promise(resolve  => setTimeout(() => {
        resolve({
          ...defaultLoginDetails,
         token: Buffer.from(`${new Date().getMilliseconds()}`, 'base64')
        })
      }, 2000))
    }
    throw Error('Invalid Credentials');
  } catch (error) {
    console.log(error);
    return rejectWithValue(error);}
  
})



export const handleLogin = createAsyncThunk('login', async (data, {rejectWithValue}) => {
  var Buffer = require('buffer/').Buffer
  try {
    console.log('condition',data);
    if(data.email === defaultLoginDetails.email && data.password === defaultLoginDetails.password ) {
      return await new Promise(resolve  => setTimeout(() => {
        resolve({
          ...defaultLoginDetails,
         token: Buffer.from(`${new Date().getMilliseconds()}`, 'base64')
        })
      }, 2000))
    }
    throw Error('Invalid Credentials');
  } catch (error) {
    console.log(error);
    return rejectWithValue(error);}
  
})


export const AuthSlice = createSlice({
    name: "user",
    initialState,
    reducers:{},
    extraReducers: {
      [handleLogin.fulfilled] : (state,payload) => {
        state.isAuthenticated = true,
        state.auth = payload
      },
      [handleLogin.rejected] : (state, payload) => {
        state.isAuthenticated=false,
        state.error = payload
      },
    }
});

const {reducer} =AuthSlice;
export default reducer;