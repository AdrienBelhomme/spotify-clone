import { configureStore } from '@reduxjs/toolkit';
import { shazamApi } from '../services/shazam';

export default configureStore({
  reducer: {
    [shazamApi.reducerPath]: shazamApi.reducer,
  },
  middleware: (getDefaultMiddleware) => { return getDefaultMiddleware().concat(shazamApi.middleware); },
});
