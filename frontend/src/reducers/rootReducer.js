import { combineReducers } from '@reduxjs/toolkit';
import alert from './alert';
import signupAuth from './signupAuth';

const rootReducer = combineReducers({ alert, signupAuth });

export default rootReducer;
