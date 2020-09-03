export interface IRole {
  id: number;
  name: string;
  description: string;
}

export interface IUser {
  id: number;
  firstName: string;
  middleName: string;
  lastName: string;
  dateOfBirth: string;
  address: string;
  email: string;
  roles: IRole[];
}

export interface IUserAuth extends IUser {
  refreshToken: string;
  token: string;
}
