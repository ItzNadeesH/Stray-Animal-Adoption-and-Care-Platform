import {
  AUTHENTICATION_SUCCESS,
  AUTHENTICATION_FAILED,
} from '../actions/types';

const initialState = {
  token: null,
  isAuthenticated: null,
  user: null,
};

const userAuth = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case AUTHENTICATION_SUCCESS:
      return {
        ...state,
        token: localStorage.getItem('token'),
        isAuthenticated: true,
        user: payload,
      };
    case AUTHENTICATION_FAILED:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

export default userAuth;
