/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentSongs: [],
  songUrl: '',
  currentIndex: 0,
  isPlaying: false,
  isPause: false,
  isPlayIsPause: { play: false, pause: false },
  activeSong: {},
  genreListId: '',
};

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setActiveSong: (state, action) => {
      const { isPlaying, isPause, url } = action.payload;
      state.isPlayIsPause = { play: isPlaying, pause: isPause };
      state.songUrl = url;
    },
  },
});

export const { setActiveSong } = playerSlice.actions;
export default playerSlice.reducer;

export const globalStateUrl = (state) => { return state.songUrl; };

