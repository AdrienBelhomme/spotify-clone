/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
import { createSlice } from '@reduxjs/toolkit';

export const genre = createSlice({
  name: 'genre',
  initialState: {
    genreName: '',
    countryName: 'France',
    countryCode: 'FR',
    countryCodeAndName: { name: 'France', code: 'FR' },
    country: {},
    query: '',
  },
  reducers: {
    selectGenre: (state, action) => {
      const { name, code } = action.payload;
      state.countryCodeAndName = { name, code };
      state.countryName = name;
      state.countryCode = code;
      // reseting searchQuery
      state.query = '';
    },
    searchSongs: (state, action) => {
      console.log(action.payload);
      state.query = action.payload;
    },
  },
});

export const { selectGenre, searchSongs } = genre.actions;

export default genre.reducer;
