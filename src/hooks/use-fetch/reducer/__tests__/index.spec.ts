// Test file
import { initialState, CONSTANTS, fetchReducer } from '../index';

describe('Fetch reducer', () => {
  const cases = [
    [
      {
        type: CONSTANTS.SET_LOADING,
        payload: true,
        property: 'loading',
      },
    ],
    [
      {
        type: CONSTANTS.SET_DATA,
        payload: [],
        property: 'data',
      },
    ],
    [
      {
        type: CONSTANTS.SET_ERROR,
        payload: {},
        property: 'errors',
      },
    ],
  ];

  it.each(cases)('should change the state of %s', ({ type, payload, property }: any) => {
    const state = fetchReducer(initialState as any, { type, payload });
    expect(state[property]).toEqual(payload);
  });

  it('should return default state', () => {
    const type: any = 'fake state';
    const state = fetchReducer(initialState as any, { type, payload: null });
    expect(state).toEqual(initialState);
  });
});
