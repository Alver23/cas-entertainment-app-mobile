// Dependencies
import { createSelector } from 'reselect';

import { RootState } from '../../reducers';
import { globalFeatureKey, IGlobalState } from '../../reducers/globals';

export const selectGlobalState = (state: RootState) => state[globalFeatureKey];

export const selectAppLoader = createSelector(selectGlobalState, (state: IGlobalState) => state.showLoader);
