// Dependencies
import React, { ReactElement } from 'react';

// Components
import { LoaderView } from '@components/loader';

// Contexts
import { UserContext } from "./context";

// Models
import { IUserProviderProps } from "./models";

// Hooks
import { useUserProvider } from "./hooks";

export const UserProvider = ({ children }: IUserProviderProps): ReactElement => {
  const [{ user, menus, errors, loading }] = useUserProvider();

  return (
    <UserContext.Provider value={{ user, menus, errors }}>
      { !loading ? children : <LoaderView /> }
    </UserContext.Provider>
  );
}
