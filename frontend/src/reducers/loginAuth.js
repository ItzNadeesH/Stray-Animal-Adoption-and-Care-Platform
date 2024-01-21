import { LOGIN_SUCCESS, LOGIN_FAILED } from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  isLoggedIn: null,
  isLoading: true,
};

const loginAuth = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_SUCCESS:
      localStorage.setItem('token', payload);
      return {
        ...state,
        token: payload,
        isLoggedIn: true,
        isLoading: false,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        token: null,
        isLoggedIn: false,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default loginAuth;
