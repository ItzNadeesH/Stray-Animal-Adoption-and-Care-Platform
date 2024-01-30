import { combineReducers } from '@reduxjs/toolkit';
import signupAuth from './signupAuth';
import loginAuth from './loginAuth';
import userAuth from './userAuth';
import logoutAuth from './logoutAuth';
import cartReducer from './cartSlice';
import profileAuth from './profileAuth';
import orderReducer from './orderSlice';

const rootReducer = combineReducers({
  cartReducer,
  signupAuth,
  loginAuth,
  userAuth,
  logoutAuth,
  profileAuth,
  orderReducer,
});

export default rootReducer;
