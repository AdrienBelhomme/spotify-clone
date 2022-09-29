import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const shazamApiKey = process.env.REACT_APP_SHAZAM_KEY;
const host = 'shazam-core.p.rapidapi.com';

export const shazamApi = createApi({
  reducerPath: 'shazamApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', `${shazamApiKey}`);
      headers.set('X-RapidAPI-Host', `${host}`);

      return headers;
    } }),
  endpoints: (builder) => {
    return {
    // Get world charts
      getWorldCharts: builder.query({
        query: () => { return 'charts/world?offset=2&search_type=SONGS_ARTISTS'; },
      }),
    };
  },
});

export const { useGetWorldChartsQuery } = shazamApi;
