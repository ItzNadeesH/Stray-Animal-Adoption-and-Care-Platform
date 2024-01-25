import { combineReducers } from '@reduxjs/toolkit';
import alert from './alert';
import signupAuth from './signupAuth';
import loginAuth from './loginAuth';
import userAuth from './userAuth';
import logoutAuth from './logoutAuth';
import cartReducer from './cartSlice';

const rootReducer = combineReducers({
  alert,
  signupAuth,
  loginAuth,
  userAuth,
  logoutAuth,
  cartReducer,
});

export default rootReducer;
