// Dependencies
import { createAsyncThunk } from '@reduxjs/toolkit';

// Services
import { artistService } from '@services/artist';

export const fetchArtistById = createAsyncThunk('artist/detail', async (artistId: number) => {
  const response = await artistService.getById(artistId);
  return response;
});

export const artistUpdate = createAsyncThunk('artist/update', async (payload: any) => {
  const { id } = payload;
  const response = await artistService.update(id, payload);
  return response;
});
