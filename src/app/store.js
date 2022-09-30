import { configureStore } from '@reduxjs/toolkit';
import { shazamApi } from '../services/shazam';
import genreReducer from '../features/currentGenre';

export default configureStore({
  reducer: {
    [shazamApi.reducerPath]: shazamApi.reducer,
    currentGenre: genreReducer,
  },
  middleware: (getDefaultMiddleware) => { return getDefaultMiddleware().concat(shazamApi.middleware); },
});
