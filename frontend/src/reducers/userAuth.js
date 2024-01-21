import {
  AUTHENTICATION_SUCCESS,
  AUTHENTICATION_FAILED,
} from '../actions/types';

const initialState = {
  isAuthenticated: null,
  user: null,
};

const userAuth = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case AUTHENTICATION_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: payload,
      };
    case AUTHENTICATION_FAILED:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

export default userAuth;
