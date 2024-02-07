import setAuthToken from '../utils/setAuthToken';
import axios from 'axios';
import {
  AUTHENTICATION_FAILED,
  AUTHENTICATION_SUCCESS,
  CLEAR_PROFILE,
  GET_PROFILE,
  LOGOUT_FAILED,
  LOGOUT_SUCCESS,
} from './types';
import { CLEAR_CART } from '../reducers/cartSlice';

// Load user
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get('api/auth');

    dispatch({
      type: AUTHENTICATION_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTHENTICATION_FAILED,
    });
  }
};

// Load Profile
export const loadProfile = () => async (dispatch) => {
  try {
    const res = await axios.get('api/profiles/me');
    dispatch({ type: GET_PROFILE, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

// Logout
export const logout = () => async (dispatch) => {
  if (localStorage.getItem('token')) {
    dispatch({ type: LOGOUT_SUCCESS });
    dispatch({ type: CLEAR_PROFILE });
    dispatch(CLEAR_CART());
  } else {
    dispatch({ type: LOGOUT_FAILED });
  }
};
