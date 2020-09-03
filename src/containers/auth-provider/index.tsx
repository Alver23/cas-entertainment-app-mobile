// Dependencies
import React, { ReactElement } from 'react';

// Components
import { LoaderView } from '@components/loader';

// Contexts
import { AuthContext } from '@contexts/auth/auth-context';

// Models
import { IAuthProviderProps } from './models/auth-provider-interface';

// Hooks
import { useAuth } from './hooks';

export const AuthProvider = ({ children }: IAuthProviderProps): ReactElement => {
  const [data, logout] = useAuth();
  const { initialize } = data;

  return <AuthContext.Provider value={{ ...data, logout }}>{initialize ? children : <LoaderView />}</AuthContext.Provider>;
};
