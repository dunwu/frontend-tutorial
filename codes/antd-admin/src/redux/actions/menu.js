import api from '@/api/index';
import { MenuActionType } from '../constants';

export const refreshNavPath = (path, key) => {
  return {
    type: MenuActionType.REFRESH_NAVPATH,
    payload: {
      data: path,
      key: key
    }
  }
};

export const refreshMenu = () => {
  return {
    type: MenuActionType.REFRESH_MENU,
    payload: {
      promise: api.get('/menu')
    }
  }
};
