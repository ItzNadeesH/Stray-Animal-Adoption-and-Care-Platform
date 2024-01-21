import { combineReducers } from '@reduxjs/toolkit';
import alert from './alert';
import signupAuth from './signupAuth';
import loginAuth from './loginAuth';

const rootReducer = combineReducers({ alert, signupAuth, loginAuth });

export default rootReducer;
