/* eslint no-param-reassign: 0 */
// Dependencies
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Models
import { IArtist } from '@models/artist';

import { STATUS_TYPES } from '@commons/app';

// Actions
import { fetchArtistById } from './actions';

export const artistKey = 'artist';

export interface IState {
  data: IArtist;
  status: STATUS_TYPES;
  error: any;
}

const initialState: IState = {
  data: {},
  status: STATUS_TYPES.IDLE,
  error: undefined,
};

const artistSlice = createSlice({
  name: artistKey,
  initialState,
  reducers: {
    reset(state: IState) {
      state.data = {};
      state.status = 'idle';
      state.error = undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchArtistById.fulfilled, (state: IState, action: PayloadAction) => {
      state.data = action.payload;
      state.status = 'succeeded';
      state.error = undefined;
    });
    builder.addCase(fetchArtistById.pending, (state: IState) => {
      state.status = 'loading';
    });
    builder.addCase(fetchArtistById.rejected, (state: IState, action: any) => {
      state.status = 'failed';
      state.data = {};
      state.error = action.error.message;
    });
  },
});

export const { reset } = artistSlice.actions;
export default artistSlice.reducer;
