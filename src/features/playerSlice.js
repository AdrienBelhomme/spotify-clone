/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentSongs: [],
  songUrl: '',
  currentIndex: 0,
  isPlaying: false,
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
      state.songUrl = action.payload;
    },
    setPlayOrPause: (state, action) => {
      state.isPlaying = action.payload;
    },
    setGlobalVolume: (state, action) => {
      state.volume = action.payload;
    },
    setPlayedSeconds: (state, action) => {
      state.playedSeconds = action.payload;
    },
    setPlayed: (state, action) => {
      state.played = action.payload;
    },
    setSeeking: (state, action) => {
      state.seeking = action.payload;
    },
    setDuration: (state, action) => {
      state.duration = action.payload;
    },
    setArtistAndSong: (state, action) => {
      const { song, artist } = action.payload;
      state.artist = artist;
      state.song = song;
    },
  },

});

export const { setActiveSong, setPlayOrPause, setGlobalVolume, setPlayedSeconds, setPlayed, setSeeking, setDuration, setArtistAndSong } = playerSlice.actions;
export default playerSlice.reducer;

export const globalStateUrl = (state) => state.songUrl;
