import { combineReducers } from '@reduxjs/toolkit';
import alert from './alert';
import signupAuth from './signupAuth';
import loginAuth from './loginAuth';
import userAuth from './userAuth';
import logoutAuth from './logoutAuth';

const rootReducer = combineReducers({
  alert,
  signupAuth,
  loginAuth,
  userAuth,
  logoutAuth,
});

export default rootReducer;
