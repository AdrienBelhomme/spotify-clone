/* eslint-disable no-lone-blocks */
/* eslint-disable no-console */
import React from 'react';
import { Box, Button, CircularProgress, Grid } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';

import { useGetArtistDetailsQuery } from '../services/shazam.js';
import CardArtistMusic from './CardArtistMusic.jsx';
import CardAlbumArtist from './CardAlbumArtist.jsx';

const Artists = () => {
  const { artistId } = useParams();
  const navigate = useNavigate();

  const { data: artistData, isFetching: isFetchingArtistDetails, error } = artistId === ':artistId' ? useGetArtistDetailsQuery(95705522) : useGetArtistDetailsQuery(artistId);

  if (isFetchingArtistDetails) {
    return (
      <Box title="loading artist details" display="flex" justifyContent="center">
        <CircularProgress size="7rem" />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <Button startIcon={<ArrowBack />} onClick={() => navigate(-1)} color="primary">
          Go Back
        </Button>
      </Box>
    );
  }

  const allAlbums = Object.entries(artistData?.albums);
  const allSongs = Object.entries(artistData?.songs);
  const allArtists = Object.entries(artistData?.artists);
  const allData = Object.entries(artistData);

  return (
    <Grid container spacing={3}>
      <Grid item sx={{ marginBottom: '5rem' }}>
        <Grid container sx={{ display: 'flex', marginTop: '2rem' }}>
          <Grid item sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
            <img
              src={allArtists[0][1].attributes.artwork.url
                .replace(
                  '{w}',
                  allArtists[0][1].attributes.artwork.width,
                )
                .replace(
                  '{h}',
                  allArtists[0][1].attributes.artwork.height,
                )}
              srcSet={allArtists[0][1].attributes.artwork.url
                .replace(
                  '{w}',
                  allArtists[0][1].attributes.artwork.width,
                )
                .replace(
                  '{h}',
                  allArtists[0][1].attributes.artwork.height,
                )}
              className="artist-img"
              alt={`${allArtists[0][1].attributes.name}-artist-cover`}
              loading="lazy"
              width="18%"
              height="auto"
              style={{ borderRadius: '20px' }}
            />
            <div style={{ marginLeft: '2rem' }}>
              <h2>{allArtists[0][1].attributes.name}</h2>
              <h3>{allArtists[0][1].attributes.genreNames[0]}</h3>
            </div>

          </Grid>
          <Grid container>
            <Grid item sx={{ width: '100%', marginTop: '3rem' }}>
              <h3>Top 5 songs: </h3>
            </Grid>
            {allSongs.slice(0, 5).map((song, i) => (
              <CardArtistMusic data={allData} songs={allSongs} key={i} index={i} artist={allArtists} artistId={artistId} />
            ))}
          </Grid>
          <Grid item sx={{ width: '100%' }}>
            <h3>All albums: </h3>
          </Grid>
          {allAlbums.map((album, i) => (
            <CardAlbumArtist data={allData} key={i} index={i} albums={allAlbums} album={album} id={artistId} />
          ))}
        </Grid>

      </Grid>
    </Grid>
  );
};

export default Artists;
