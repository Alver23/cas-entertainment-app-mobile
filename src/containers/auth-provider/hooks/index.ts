// Dependencies
import React from 'react';

// Hooks
import { useDidMount } from '@hooks/did-mount';

// Models
import { IMutableRefObject } from '@models/mutable-ref-interface';

// Services
import { userService } from '@services/user/user-service';

// Contexts
import { IAuthContext } from '@contexts/auth';

export const useAuth = (): [T, () => void] => {
  const initialState: IAuthContext = {
    user: null,
    authenticated: false,
    initialize: false,
  };

  const [data, setData] = React.useState(initialState);
  const isMounted: IMutableRefObject<boolean> = React.useRef(true);

  const logout: () => void = React.useCallback(async () => {
    setData({ ...initialState, initialize: true });
    await userService.clearUserInfo();
  }, []);

  useDidMount(
    (): Function => {
      return (): void => {
        isMounted.current = false;
      };
    },
  );

  useDidMount((): void => {
    userService
      .getUserInfo()
      .then((user) => {
        if (isMounted.current) {
          setData({
            user,
            initialize: true,
            authenticated: !!user,
          });
        }
      })
      .catch(() => {
        if (isMounted.current) {
          setData(initialState);
        }
      });
  });

  return [data, logout];
};
