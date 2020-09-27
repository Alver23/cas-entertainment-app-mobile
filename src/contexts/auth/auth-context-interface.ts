// Models
import { IUserAuth } from '@models/user-interface';

export interface IAuthContext {
  authenticated: boolean;
  user: IUserAuth;
  initialize: boolean;
  logout: () => void;
}
