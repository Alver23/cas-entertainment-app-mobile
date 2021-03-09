// Dependencies
import { createSelector } from 'reselect';

import { RootState } from '@store/reducers';
import { artistKey, IState } from '../index';

export const selectArtistState = (state: RootState) => state[artistKey];
export const selectData = createSelector(selectArtistState, (state: IState) => state.data);
export const selectStatus = createSelector(selectArtistState, (state: IState) => state.status);
export const selectError = createSelector(selectArtistState, (state: IState) => state.error);
