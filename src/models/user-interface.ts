
export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  roles: string[];
}

export interface IUserMenu {
  id: number;
  name: string;
  description: string;
  orden: number;
}

export interface IUserProvider {
  user: IUser;
  menus: IUserMenu[];
  errors: Error;
}
