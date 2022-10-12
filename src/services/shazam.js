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
        query: () => { return 'charts/world'; },
      }),
      // Get artits details
      getArtistDetails: builder.query({
        query: (artistId) => { return `artists/details?artist_id=${artistId}`; },
      }),
      // Get song details
      getSongDetails: builder.query({
        query: ({ trackId }) => { return `tracks/details?track_id=${trackId}`; },
      }),
      // Get world charts by genre
      getWorldChartsByGenre: builder.query({
        query: (genreId) => { return `charts/genre-world?genre_code=${genreId}`; },
      }),
      // Get charts by country
      getWorldChartsByCountry: builder.query({
        query: (countryId) => { return `charts/country?country_code=${countryId}`; },
      }),
      // Get charts by city
      getWorldChartsByCity: builder.query({
        query: (cityId) => { return `charts/city?city_id=${cityId}`; },
      }),
      // Related songs
      getRelatedSongs: builder.query({
        query: (trackId) => { return `tracks/related?track_id=${trackId}`; },
      }),
      // Search songs
      searchSongs: builder.query({
        query: (offset, query) => {
          return `search/multi?offset=${offset}&query=${query}&search_type='SONGS'`;
        },
      }),
      // Search artist
      searchArtists: builder.query({
        query: (offset, query) => {
          return `search/multi?offset=${offset}&query=${query}&search_type='ARTISTS'`;
        },
      }),
      // Get List of Countries (53 in total)
      getCountries: builder.query({
        query: () => {
          return 'https://shazam-core.p.rapidapi.com/v1/frame/cities';
        },
      }),

    };
  },
});

export const { useGetWorldChartsQuery, useGetCountriesQuery, useGetArtistDetailsQuery, useGetSongDetailsQuery, useGetWorldChartsByGenreQuery, useGetWorldChartsByCityQuery, useGetWorldChartsByCountryQuery, useGetRelatedSongsQuery, useSearchSongsQuery,
  useSearchArtistsQuery } = shazamApi;
