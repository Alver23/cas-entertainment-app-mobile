// Core
import { externalAxiosInstance } from '@core/axios';

// config
import endpoints from '@config/endpoints';

// Connector
import { Connector } from '@core/connector';

// Models
import { ILoginRequest, ILoginResponse } from './authentication-interface';

export class AuthenticationService {
  constructor(private readonly http: Connector) {}

  public login(payload: ILoginRequest): Promise<ILoginResponse> {
    const url = endpoints.login;
    const { email, password } = payload;
    const auth = {
      password,
      username: email,
    };
    return this.http.post(url, {}, { auth });
  }
}

export const authenticationService = new AuthenticationService(new Connector(externalAxiosInstance));
