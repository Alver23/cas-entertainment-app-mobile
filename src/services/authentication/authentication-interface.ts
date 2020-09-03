// Models
import { IUserAuth } from '@models/user-interface';

export interface ILoginRequest {
  email: string;
  password: string;
}

export type ILoginResponse = IUserAuth;
