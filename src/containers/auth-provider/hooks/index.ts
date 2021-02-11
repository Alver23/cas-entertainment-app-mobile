// Dependencies
import React from 'react';

// Hooks
import { useDidMount } from '@hooks/did-mount';

// Models
import { IMutableRefObject } from '@models/mutable-ref-interface';

// Commons
import { clearAuthData, getToken } from '@commons/auth';

// Contexts
import { IAuthContext } from '@contexts/auth';

export const useAuth = (): [T, () => void] => {
  const initialState: IAuthContext = {
    token: null,
    authenticated: false,
    initialize: false,
  };

  const [data, setData] = React.useState(initialState);
  const isMounted: IMutableRefObject<boolean> = React.useRef(true);

  const logout: () => void = React.useCallback(async () => {
    setData({ ...initialState, initialize: true });
    await clearAuthData();
  }, []);

  useDidMount(
    (): Function => {
      return (): void => {
        isMounted.current = false;
      };
    },
  );

  useDidMount((): void => {
    getToken()
      .then((token: string) => {
        if (isMounted.current) {
          setData({
            token,
            initialize: true,
            authenticated: !!token,
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
