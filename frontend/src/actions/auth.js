import { setAlert } from '../actions/alert';
import axios from 'axios';

// Signup
export const register = (username, email, password) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({ username, email, password });

  try {
    const res = await axios.post('/api/users', body, config);

    console.log(res.data);
  } catch (error) {
    const errors = error.response.data.errors;

    if (errors) {
      dispatch(setAlert(errors[0].msg, 'danger'));
    }
  }
};
