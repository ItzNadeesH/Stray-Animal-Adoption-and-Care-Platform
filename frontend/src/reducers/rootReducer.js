import { combineReducers } from '@reduxjs/toolkit';
import userAuth from './userAuth';
import logoutAuth from './logoutAuth';
import cartReducer from './cartSlice';
import profileAuth from './profileAuth';
import orderReducer from './orderSlice';

const rootReducer = combineReducers({
  cartReducer,
  userAuth,
  logoutAuth,
  profileAuth,
  orderReducer,
});

export default rootReducer;
