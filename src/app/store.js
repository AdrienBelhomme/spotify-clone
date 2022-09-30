import { configureStore } from '@reduxjs/toolkit';
import { shazamApi } from '../services/shazam';
import playerReducer from '../features/playerSlice';

export default configureStore({
  reducer: {
    [shazamApi.reducerPath]: shazamApi.reducer,
    player: playerReducer,
  },
});
