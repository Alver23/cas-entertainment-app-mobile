// Models
import { IUser, IUserMenu } from '@models/user-interface';

export enum USER_CONSTANTS {
  SET_USER = 'SET_USER',
  SET_MENUS = 'SET_MENUS',
  SET_LOADING = 'SET_LOADING',
  SET_ERROR = 'SET_ERROR',
}

export type IState = {
  user: IUser;
  menus: IUserMenu[];
  loading: false;
  errors: Error;
};

export type IAction = {
  type: USER_CONSTANTS;
  payload: any;
};

export const initialState = {
  user: undefined,
  menus: [],
  loading: false,
  errors: undefined,
};

export const userReducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case USER_CONSTANTS.SET_LOADING:
      return { ...state, loading: action.payload };
    case USER_CONSTANTS.SET_USER:
      return { ...state, user: action.payload };
    case USER_CONSTANTS.SET_MENUS:
      return { ...state, menus: action.payload };
    default:
      return state;
  }
};
