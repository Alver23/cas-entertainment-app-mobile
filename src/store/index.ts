// Dependencies
import { configureStore } from '@reduxjs/toolkit';

// Reducers
import { rootReducer } from './reducers';

const enhancers = [];

if (__DEV__) {
  import('../core/tools/reactotron/config')
    .then((response) => enhancers.push(response.default.createEnhancer()))
}


export const rootStore = configureStore({ reducer: rootReducer, enhancers });
