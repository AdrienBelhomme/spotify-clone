import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const shazamApiKey = process.env.REACT_APP_SHAZAM_KEY;
const host = 'shazam-core.p.rapidapi.com';

export const shazamApi = createApi({
  reducerPath: 'shazamApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://shazam-core.p.rapidapi.com/v1' }),
  endpoints: (builder) => ({
    // Get world charts
    getWorldCharts: builder.query({
      query: () => 'charts/world',
    }),
  }),
});

export const { useGetWorldChartsQuery } = shazamApi;
