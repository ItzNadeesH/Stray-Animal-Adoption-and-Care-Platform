import { combineReducers } from '@reduxjs/toolkit';
import alert from './alert';
import signupAuth from './signupAuth';
import loginAuth from './loginAuth';
import userAuth from './userAuth';

const rootReducer = combineReducers({ alert, signupAuth, loginAuth, userAuth });

export default rootReducer;
