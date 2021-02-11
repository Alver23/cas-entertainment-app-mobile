export interface IAuthContext {
  authenticated: boolean;
  token: string;
  initialize: boolean;
  logout: () => void;
}
