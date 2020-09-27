import { selectAppLoader, selectGlobalState } from '../index';

describe('selectAppLoader', () => {
  const mockParameters = {
    global: {
      showLoader: false,
    },
  };

  it('should return the global state', () => {
    const state = selectGlobalState(mockParameters);
    expect(state).toEqual(mockParameters.global);
  });

  it('should return global.showLoader as boolean', () => {
    const selected = selectAppLoader.resultFunc(mockParameters.global);
    expect(selected).toEqual(expect.any(Boolean));
  });
});
