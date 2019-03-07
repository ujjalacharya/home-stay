import { LOGIN_USER_FAILURE, LOGIN_USER_SUCCESS} from "../actions/types";

const INITIAL_STATE = {
  isAuth: false,
  token: '',
  errors: []  
};

export const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return { ...state, isAuth: true, token: action.token, errors: [] };
    case LOGIN_USER_FAILURE:
      return { ...state, isAuth: false, errors: action.err };
    default:
      return state;
  }
};