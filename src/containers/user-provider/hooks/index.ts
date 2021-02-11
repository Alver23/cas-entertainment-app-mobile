// Dependencies
import React from 'react';
import jwtDecode from 'jwt-decode';

// Hooks
import { useLocalSession } from '@hooks/auth';

// Services
import { userService } from '@services/user';

// Reducers
import { USER_CONSTANTS, initialState, userReducer, IState } from "../reducers";

export const useUserProvider = (): [IState] => {
  const { token } = useLocalSession();
  const [ state, dispatch ] = React.useReducer(userReducer, initialState);
  const { user } = state;

  React.useEffect(() => {
    const { email, firstName, lastName, roles, sub } = jwtDecode(token);
    const payload = { email, firstName, lastName, roles, id: sub };
    dispatch({ type: USER_CONSTANTS.SET_USER, payload });
  }, [token]);

  React.useEffect(() => {
    if (user?.id) {
      dispatch({ type: USER_CONSTANTS.SET_LOADING, payload: true });
      userService
        .getMenus(user.id)
        .then((payload) => {
          dispatch({ type: USER_CONSTANTS.SET_MENUS, payload });
        })
        .catch((error) =>  {
          dispatch({ type: USER_CONSTANTS.SET_ERROR, payload: error });
        })
        .finally(() => {
          dispatch({ type: USER_CONSTANTS.SET_LOADING, payload: false });
        });
    }
  }, [user?.id]);

  return [state];
}
