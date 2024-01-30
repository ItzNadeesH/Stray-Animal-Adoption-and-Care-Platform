import setAuthToken from '../utils/setAuthToken';
import axios from 'axios';
import {
  AUTHENTICATION_FAILED,
  AUTHENTICATION_SUCCESS,
  CLEAR_PROFILE,
  GET_PROFILE,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LOGOUT_FAILED,
  LOGOUT_SUCCESS,
  REGISTER_FAILED,
  REGISTER_SUCCESS,
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

// Login
export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post('/api/auth', body, config);

    dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
    dispatch(loadUser());
  } catch (error) {
    const errors = error.response.data.errors;

    console.log(errors);

    dispatch({ type: LOGIN_FAILED });
  }
};

// Signup
export const register = (username, email, password) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({ username, email, password });

  try {
    await axios.post('/api/users', body, config);

    dispatch({ type: REGISTER_SUCCESS });
  } catch (error) {
    const errors = error.response.data.errors;

    console.log(errors);

    dispatch({ type: REGISTER_FAILED });
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
