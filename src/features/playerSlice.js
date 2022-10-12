/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentSongs: [],
  songUrl: '',
  currentIndex: 0,
  isPlaying: false,
  isPause: false,
  isActive: false,
  isPlayIsPause: { play: false, pause: false },
  activeSong: {},
  genreListId: '',
  volume: 0.5,
  playedSeconds: 0,
  played: 0,
  seeking: false,
  duration: 0,
  artist: '',
  song: '',
};

export const playerSlice = createSlice({
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

export const globalStateUrl = (state) => state.songUrl;

