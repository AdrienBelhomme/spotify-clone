/* eslint-disable no-lone-blocks */
/* eslint-disable no-console */
import React from 'react';
import { Box, Button, CircularProgress, Grid } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';

import { useGetArtistDetailsQuery } from '../services/shazam.js';

const Artists = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  console.log(id);

  const { data: artistData, isFetching: isFetchingArtistDetails, error } = id === undefined ? useGetArtistDetailsQuery(id) : useGetArtistDetailsQuery(95705522);

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

  console.log(artistData);

  const allAlbums = Object.entries(artistData?.albums);
  const allSongs = Object.entries(artistData?.songs);

  console.log(allSongs);

  return (
    <Grid container spacing={3}>
      <Grid item lg={5} xl={4}>
        {/*  <CardAlbum
          artistId={artistId}
          artistData={artistData}
        /> */}

        <h3>Last 5 albums: </h3>
        {allAlbums.slice(0, 5).map((album, i) => (
          <p>{album[1].attributes.name}</p>
        ))}
        <h3>Top 5 songs: </h3>
        {allSongs.slice(0, 5).map((song, i) => (
          <p>{song[1].attributes.name}</p>
        ))}
      </Grid>
    </Grid>
  );
};

export default Artists;

{ /* 95705522 chris brown id shazam */ }
