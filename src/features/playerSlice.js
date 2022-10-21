/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dataSongs: {},
  currentIndex: 0,
  currentSongs: [],
  songUrl: '',
  isPlaying: false,
  activeSong: {},
  genreListId: '',
  volume: 0.5,
  playedSeconds: 0,
  played: 0,
  seeking: false,
  duration: 0,
  artist: 'Chris Brown',
  song: 'Under The Influence',
  image: 'https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/97/ec/96/97ec963b-8829-f040-fe40-508069d6044b/196589418449.jpg/400x400cc.jpg',
  alt: '',
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
    setNextMusic: (state, action) => {
      state.duration = action.payload;
    },
    setDataAndIndex: (state, action) => {
      const { data, index } = action.payload;
      state.dataSongs = data;
      state.currentIndex = index;
    },
    setArtistAndSongAndImage: (state, action) => {
      const { song, artist, image, alt } = action.payload;
      state.artist = artist;
      state.song = song;
      state.image = image;
      state.alt = alt;
    },
    playPause: (state, action) => {
      state.isPlaying = action.payload;
    },
  },

});

export const { setActiveSong, setPlayOrPause, setGlobalVolume, setPlayedSeconds, setPlayed, setSeeking, setDuration, setArtistAndSongAndImage, setDataAndIndex } = playerSlice.actions;
export default playerSlice.reducer;

export const globalStateUrl = (state) => state.songUrl;
