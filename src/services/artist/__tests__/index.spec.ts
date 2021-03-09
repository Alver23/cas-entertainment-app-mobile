// Connector
import { connector } from '@core/connector';

// Test file
import { artistService } from '../index';

// Mocks
jest.mock('@config/endpoints', () => ({
  artist: {
    get: 'fake-url',
    getById: 'url/:id',
    updateById: 'url/:id',
  },
}));

jest.mock('@core/connector', () => ({
  connector: {
    get: jest.fn().mockResolvedValue({ data: {} }),
    put: jest.fn().mockResolvedValue({ data: {} }),
  },
}));

describe('ArtistService', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('get method', () => {
    it('should get the artist list', async () => {
      const response = await artistService.get();
      expect(response).toEqual(expect.any(Object));
      expect(connector.get).toHaveBeenCalledWith('fake-url', { params: {} });
    });
  });

  describe('getById method', () => {
    it('should get the artist', async () => {
      const response = await artistService.getById(1);
      expect(response).toEqual(expect.any(Object));
      expect(connector.get).toHaveBeenCalledWith('url/1', {});
    });
  });

  describe('update method', () => {
    it('should get the artist update', async () => {
      const response = await artistService.update(1, {});
      expect(response).toEqual(expect.any(Object));
      expect(connector.put).toHaveBeenCalledWith('url/1', {}, {});
    });
  });
});
