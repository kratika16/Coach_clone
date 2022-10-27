import { configureStore, combineReducers, compose } from '@reduxjs/toolkit'
import loginSlice from './loginSlice';

const rootReducer = combineReducers({
  user: loginSlice
});

export const store = configureStore({
  reducer: rootReducer,
  devTools:true,
});