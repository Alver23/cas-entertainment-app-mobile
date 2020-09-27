// Dependencies
import { combineReducers } from '@reduxjs/toolkit';

// Reducers
import { globalReducers, globalFeatureKey } from './globals';

export const rootReducer = combineReducers({
  [globalFeatureKey]: globalReducers,
});

export type RootState = ReturnType<typeof rootReducer>;
