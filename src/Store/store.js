import { configureStore, combineReducers} from '@reduxjs/toolkit'
import currentTicketsSlice from './currentTicketsSlice';
import loginSlice from './loginSlice';
import paymentSlice from './paymentSlice';
const rootReducer = combineReducers({
  user: loginSlice,
  card: paymentSlice,
  current: currentTicketsSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools:true,
});