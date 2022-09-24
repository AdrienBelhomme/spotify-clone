import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamApi = createApi({
  reducerPath: 'sahzamApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://shazam-core.p.rapidapi.com/v1/search/multi' }),
});
