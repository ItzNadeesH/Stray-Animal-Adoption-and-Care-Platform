import { setAlert } from '../actions/alert';
import setAuthToken from '../utils/setAuthToken';
import axios from 'axios';
import {
  AUTHENTICATION_FAILED,
  AUTHENTICATION_SUCCESS,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  REGISTER_FAILED,
  REGISTER_SUCCESS,
} from './types';

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

    if (errors) {
      dispatch(setAlert(errors[0].msg, 'danger'));
    }

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

    if (errors) {
      dispatch(setAlert(errors[0].msg, 'danger'));
    }

    dispatch({ type: REGISTER_FAILED });
  }
};
