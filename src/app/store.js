import { configureStore } from '@reduxjs/toolkit';

import { shazamApi } from '../services/shazam';
import playerReducer from '../features/playerSlice';
import genreReducer from '../features/currentGenre';

export default configureStore({
  reducer: {
    [shazamApi.reducerPath]: shazamApi.reducer,
    playerSlice: playerReducer,
    currentGenre: genreReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shazamApi.middleware),
});
