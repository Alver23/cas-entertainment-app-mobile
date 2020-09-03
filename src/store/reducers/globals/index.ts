// Dependencies
import { createReducer, PayloadAction } from '@reduxjs/toolkit';

// Actions
import { appShowLoaderAction } from '../../actions';

interface IGlobalState {
  showLoader: boolean;
}

const initialState: IGlobalState = {
  showLoader: false,
};

export const globalReducers = createReducer(initialState, {
  [appShowLoaderAction.type]: (state: IGlobalState, action: PayloadAction<boolean>) => {
    return {
      ...state,
      showLoader: action.payload,
    };
  },
});
