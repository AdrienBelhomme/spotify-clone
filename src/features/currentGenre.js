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
    searchQuery: '',
  },
  reducers: {
    selectGenre: (state, action) => {
      const { name, code } = action.payload;
      console.log(action.payload);
      // eslint-disable-next-line no-param-reassign
      state.countryCodeAndName = { name, code };
      // eslint-disable-next-line no-param-reassign
      state.countryName = name;
      // eslint-disable-next-line no-param-reassign
      state.countryCode = code;
      // eslint-disable-next-line no-param-reassign
    },
  },
});

export const { selectGenre } = genre.actions;

export default genre.reducer;
