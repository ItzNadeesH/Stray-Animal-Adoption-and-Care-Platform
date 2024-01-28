import { GET_PROFILE } from '../actions/types';

const initialState = {
  profile: null,
  isLoading: true,
  error: null,
};

const profileAuth = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default profileAuth;
