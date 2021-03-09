// Dependencies
import { combineReducers } from '@reduxjs/toolkit';

// Reducers
import artistReducer, { artistKey } from '@containers/artists/store';
import { globalReducers, globalFeatureKey } from './globals';

export const rootReducer = combineReducers({
  [globalFeatureKey]: globalReducers,
  [artistKey]: artistReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
