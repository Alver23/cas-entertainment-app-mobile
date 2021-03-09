// Connector
import { connector, Connector } from '@core/connector';

// Models
import { IArtistList } from '@models/artist';

// config
import endpoints from '@config/endpoints';

const { artist: artistEndpoints } = endpoints;

export class ArtistService {
  private readonly endpoints = artistEndpoints;

  constructor(private readonly http: Connector) {}

  async get(params = {}): Promise<IArtistList[]> {
    const url = this.endpoints.get;
    return this.http
      .get<IArtistList[]>(url, { params })
      .then(({ data }) => data);
  }

  async getById(id: number, params = {}): Promise<any> {
    const url = this.endpoints.getById.replace(':id', id);
    return this.http.get(url, params).then(({ data }) => data);
  }

  async update(id: number, body, params = {}): Promise<any> {
    const url = this.endpoints.updateById.replace(':id', id);
    return this.http.put(url, body, params).then(({ data }) => data);
  }
}

export const artistService = new ArtistService(connector);
