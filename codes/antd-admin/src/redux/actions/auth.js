import api from '../../api/index';
import { AuthActionType } from '../constants';

export const fetchProfile = () => {
  let uid = window.localStorage.getItem('uid');

  if (uid === undefined) {
    return { type: AuthActionType.UID_NOT_FOUND };
  }

  return {
    type: AuthActionType.FETCH_PROFILE,
    payload: {
      promise: api.get('/my')
    }
  }
};

export const login = (user, password) => {
  return {
    type: AuthActionType.LOGIN,
    payload: {
      promise: api.put('/login', {
        data: {
          user: user,
          password: password
        }
      })
    }
  }
};

export const logout = () => {
  return {
    type: AuthActionType.LOGOUT,
    payload: {
      promise: api.get('/logout')
    }
  }
};
