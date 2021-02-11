// Dependencies
import React from 'react';

// Contexts
import { AuthContext } from '@contexts/auth/auth-context';
import { IAuthContext } from '@contexts/auth/auth-context-interface';

export const useLocalSession = () => {
  return React.useContext<IAuthContext>(AuthContext);
};
