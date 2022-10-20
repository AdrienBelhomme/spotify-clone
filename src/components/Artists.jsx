import React from 'react';
import { Box, Button, CircularProgress, Grid } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';

import { useGetArtistDetailsQuery } from '../services/shazam.js';
import CardArtistMusic from './CardArtistMusic.jsx';

const Artists = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: artistData, isFetching: isFetchingArtistDetails, error } = id === undefined || null ? useGetArtistDetailsQuery(id) : useGetArtistDetailsQuery(95705522);

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
        <h3>Last 5 albums: </h3>
        {allAlbums.slice(0, 5).map((album, i) => (
          <p>{album[1].attributes.name}</p>
        ))}
        <h3>Top 5 songs: </h3>
        {allSongs.slice(0, 5).map((song, i) => (
          <CardArtistMusic data={allData} songs={allSongs} key={i} index={i} artist={allArtists} />
        ))}
      </Grid>
    </Grid>
  );
};

export default Artists;

{ /* 95705522 chris brown id shazam */ }
