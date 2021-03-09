// Connector
import { connector, Connector } from '@core/connector';

// Models
import { IGroupList } from '@models/group';

// config
import endpoints from '@config/endpoints';

const { group: groupEndpoints } = endpoints;

export class GroupService {
  private readonly endpoints = groupEndpoints;

  constructor(private readonly http: Connector) {}

  async get(params = {}): Promise<IGroupList[]> {
    const url = this.endpoints.get;
    return this.http
      .get<IGroupList[]>(url, { params })
      .then(({ data }) => data);
  }
}

export const groupService = new GroupService(connector);
