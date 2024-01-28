import { combineReducers } from '@reduxjs/toolkit';
import alert from './alert';
import signupAuth from './signupAuth';
import loginAuth from './loginAuth';
import userAuth from './userAuth';
import logoutAuth from './logoutAuth';
import cartReducer from './cartSlice';
import profileAuth from './profileAuth';

const rootReducer = combineReducers({
  alert,
  cartReducer,
  signupAuth,
  loginAuth,
  userAuth,
  logoutAuth,
  profileAuth,
});

export default rootReducer;
