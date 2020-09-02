// Dependencies
import React from 'react';

// Models
import { IAuthContext } from './auth-context-interface';

export const AuthContext: React.Context<IAuthContext> = React.createContext({} as IAuthContext);
