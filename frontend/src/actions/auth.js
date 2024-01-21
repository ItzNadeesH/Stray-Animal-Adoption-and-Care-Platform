import { setAlert } from '../actions/alert';
import axios from 'axios';
import {
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  REGISTER_FAILED,
  REGISTER_SUCCESS,
} from './types';

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
