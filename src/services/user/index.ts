// Connector
import { connector, Connector } from '@core/connector';

// Models
import { IUserMenu } from '@models/user-interface';

// config
import endpoints from '@config/endpoints';

const { user: userEndpoints } = endpoints;

export class UserService {
  private readonly endpoints = userEndpoints;

  constructor(private readonly http: Connector) {}

  async getMenus(userId: number): Promise<IUserMenu[]> {
    const url = this.endpoints.menus.replace(':id', userId.toString());
    return this.http.get(url).then(({ data }) => data);
  }
}

export const userService = new UserService(connector);
