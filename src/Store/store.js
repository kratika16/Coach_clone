import { configureStore, combineReducers} from '@reduxjs/toolkit'
import alertsettingSlice from './alertsettingSlice';
import alertSlice from './alertSlice';
import currentTicketsSlice from './currentTicketsSlice';
import AuthSlice  from './loginSlice';
import pastTicketsSlice from './pastTicketsSlice';
import paymentSlice from './paymentSlice';

const rootReducer = combineReducers({
  user: AuthSlice,
  card: paymentSlice,
  current: currentTicketsSlice,
  alert: alertSlice,
  setting: alertsettingSlice,
  past: pastTicketsSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools:true,
});