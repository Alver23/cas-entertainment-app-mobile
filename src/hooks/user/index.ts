// Dependencies
import React from 'react';

// Contexts
import { UserContext } from "@containers/user-provider/context";
import { IUser } from "@models/user-interface";

export const useUserLocalSession = () => {
  return React.useContext<IUser>(UserContext);
};
