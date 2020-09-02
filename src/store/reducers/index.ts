// Dependencies
import { combineReducers } from '@reduxjs/toolkit';

// Reducers
import { globalReducers } from './globals';

export const rootReducer = combineReducers({
  global: globalReducers,
});

export type RootState = ReturnType<typeof rootReducer>;
