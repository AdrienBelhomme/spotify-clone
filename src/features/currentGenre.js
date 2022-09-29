
import { createSlice } from '@reduxjs/toolkit';

export const genre = createSlice({
  name: 'genre',
  initialState: {
    genreName: '',
    countryName: 'France',
    countryCode: 'FR',
    countryCodeAndName: { code: '', name: '' },
    country: {},
    searchQuery: '',
  },
  reducers: {
    selectGenre: (state, action) => {
      console.log(action.payload);
      const { code, name } = action.payload;
      console.log(code);
      console.log(name);
      // eslint-disable-next-line no-param-reassign
      state.countryCodeAndName = { code, name };
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
