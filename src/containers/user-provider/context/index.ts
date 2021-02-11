// Dependencies
import React from 'react';

// Models
import { IUserProvider } from '@models/user-interface';

export const UserContext: React.Context<IUserProvider> = React.createContext({} as IUserProvider);
