import { createSlice } from '@reduxjs/toolkit';

export const genre = createSlice({
  name: 'genre',
  initialState: {
    genreName: '',
    countryName: '',
    searchQuery: '',
  },
  reducers: {
    selectGenre: (state, action) => {
      console.log(action.payload);
      state.genreName = action.payload;
    },
  },
});

export const { selectGenre } = genre.actions;

export default genre.reducer;
