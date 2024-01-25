import { REGISTER_SUCCESS, REGISTER_FAILED } from '../actions/types';

const initialState = {
  isRegistered: null,
  isLoading: true,
};

const signupAuth = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isRegistered: true,
        isLoading: false,
      };
    case REGISTER_FAILED:
      return {
        ...state,
        isRegistered: false,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default signupAuth;
