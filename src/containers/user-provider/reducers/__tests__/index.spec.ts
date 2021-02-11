// Test file
import { initialState, USER_CONSTANTS, userReducer } from '../index';

describe('UserProvider reducer', () => {
  const cases = [
    [
      {
        type: USER_CONSTANTS.SET_LOADING,
        payload: true,
        property: 'loading',
      },
    ],
    [
      {
        type: USER_CONSTANTS.SET_USER,
        payload: { id: 1, name: 'fake name' },
        property: 'user',
      },
    ],
    [
      {
        type: USER_CONSTANTS.SET_MENUS,
        payload: [{ id: 2 }],
        property: 'menus',
      },
    ],
  ];

  it.each(cases)('should change the state of %s', ({ type, payload, property }: any) => {
    const state = userReducer(initialState as any, { type, payload });
    expect(state[property]).toEqual(payload);
  });

  it('should return default state', () => {
    const type: any = 'fake state';
    const state = userReducer(initialState as any, { type, payload: null });
    expect(state).toEqual(initialState);
  });
});
