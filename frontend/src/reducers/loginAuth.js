import { LOGIN_SUCCESS, LOGIN_FAILED } from '../actions/types';

const initialState = {
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
        isLoggedIn: true,
        isLoading: false,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        isLoggedIn: false,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default loginAuth;
