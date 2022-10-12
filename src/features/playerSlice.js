/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentSongs: [],
  currentIndex: 0,
  isPlaying: false,
  isPause: false,
  isActive: false,
  isPlayIsPause: { play: false, pause: false },
  activeSong: {},
  genreListId: '',
};

export const player = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setActiveSong: (state, action) => {
      const { isPlaying, isPause } = action.payload;
      state.isPlaying = isPlaying;
      state.isPause = isPause;
      state.isPlayIsPause = { play: isPlaying, pause: isPause };
    },
    playPause: (state, action) => {
      state.isPlaying = action.payload;
    },
  },
});

export const { setActiveSong, playPause } = player.actions;

export default player.reducer;

