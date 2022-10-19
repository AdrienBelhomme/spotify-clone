/* eslint-disable no-console */
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

  endpoints: (builder) => ({
    // Get world charts
    getWorldCharts: builder.query({
      query: () => 'charts/world',
    }),
    // Get artists details
    getArtistDetails: builder.query({
      query: (artistId) => `artists/details?artist_id=${artistId}`,
    }),
    // Get song details
    getSongDetails: builder.query({
      query: ({ trackId }) => `tracks/details?track_id=${trackId}`,
    }),
    // Get world charts by genre
    getWorldChartsByGenre: builder.query({
      query: (genreId) => `charts/genre-world?genre_code=${genreId}`,
    }),
    // Get charts by country
    getWorldChartsByCountry: builder.query({
      query: (countryId) => `charts/country?country_code=${countryId}`,
    }),
    // Get charts by city
    getWorldChartsByCity: builder.query({
      query: (cityId) => `charts/city?city_id=${cityId}`,
    }),
    // Related songs
    getRelatedSongs: builder.query({
      query: ({ trackId }) => `tracks/related?track_id=${trackId}`,
    }),
    // Search songs
    searchSongs: builder.query({
      query: (query) => {
        if (query === '') { return 'charts/world'; }
        return `search/multi?search_type=SONGS_ARTISTS&query=${query}`;
      },
    }),
    // Get List of Countries (53 in total)
    getCountries: builder.query({
      query: () => 'https://shazam-core.p.rapidapi.com/v1/frame/cities',
    }),

  }),
});

export const { useGetWorldChartsQuery,
  useGetCountriesQuery,
  useGetArtistDetailsQuery,
  useGetSongDetailsQuery,
  useGetWorldChartsByGenreQuery,
  useGetWorldChartsByCityQuery,
  useGetWorldChartsByCountryQuery,
  useGetRelatedSongsQuery,
  useSearchSongsQuery,
  useSearchArtistsQuery } = shazamApi;
