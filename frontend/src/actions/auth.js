import { setAlert } from '../actions/alert';
import axios from 'axios';
import { REGISTER_FAILED, REGISTER_SUCCESS } from './types';

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
