// Connector
import { connector } from '@core/connector';

// Test file
import { groupService } from '../index';

// Mocks
jest.mock('@config/endpoints', () => ({
  group: {
    get: 'fake-url',
  },
}));

jest.mock('@core/connector', () => ({
  connector: {
    get: jest.fn().mockResolvedValue({ data: {} }),
  },
}));

describe('groupService', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('get method', () => {
    it('should get the artist list', async () => {
      const response = await groupService.get();
      expect(response).toEqual(expect.any(Object));
      expect(connector.get).toHaveBeenCalledWith('fake-url', { params: {} });
    });
  });
});
