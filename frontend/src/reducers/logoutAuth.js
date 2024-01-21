import { LOGOUT_SUCCESS, LOGOUT_FAILED } from '../actions/types';

const initialState = {
  isLoggedOut: null,
  isLoading: null,
};

const logoutAuth = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case LOGOUT_SUCCESS:
      localStorage.removeItem('token');
      return {
        ...state,
        isLoggedOut: true,
        isLoading: false,
      };
    case LOGOUT_FAILED:
      return {
        ...state,
        isLoggedOut: false,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default logoutAuth;
