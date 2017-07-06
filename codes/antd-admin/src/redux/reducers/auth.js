import { AuthActionType } from '../constants';

const initialState = {
  user: null,
  loggingIn: false,
  loggingOut: false,
  loginErrors: null
};

const auth = (state = initialState, action = {}) => {
  switch (action.type) {
    case AuthActionType.LOGIN_PENDING:
      return Object.assign({}, state, {
        loggingIn: true
      });
    case AuthActionType.LOGIN_SUCCESS:
      let user = action.payload.data;
      window.localStorage.setItem('uid', user.uid);
      return Object.assign({}, state, {
        user: user,
        loggingIn: false,
        loginErrors: null
      });
    case AuthActionType.LOGIN_ERROR:
      return {
        ...state,
        loggingIn: false,
        user: null,
        loginErrors: action.payload.response.data.message
      };
    case AuthActionType.LOGOUT_SUCCESS:
      window.localStorage.removeItem('uid');
      return {
        ...state,
        loggingOut: false,
        user: null,
        loginErrors: null
      };
    case AuthActionType.FETCH_PROFILE_SUCCESS:
      return Object.assign({}, state, {
        user: action.payload.data,
        loggingIn: false,
        loginErrors: null
      });
    default:
      return state;
  }
};
export default auth;
