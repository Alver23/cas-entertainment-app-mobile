// Dependencies
import { configureStore } from '@reduxjs/toolkit';

// Reducers
import { rootReducer } from './reducers';

export const rootStore = configureStore({ reducer: rootReducer });
