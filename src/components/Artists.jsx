import React, { useState } from 'react';
import { Box, Button, CircularProgress, Grid,Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ArrowBack } from '@mui/icons-material';

import { useGetArtistDetailsQuery, useGetRelatedSongsQuery } from '../services/shazam.js';

const Artists = () => {
 const { artistId } = useParams();
 const { activeSong, isPlaying } = useSelector((state) => state.player);


 const { data: artistData, isFetching: isFetchingArtistDetails, error } = useGetArtistDetailsQuery(artistId);

 if (isFetchingArtistDetails) 
  return (
    <Box title= "loading artist details" display="flex" justifyContent="center">
      <CircularProgress size="7rem" />
    </Box>
  );

if (error) {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
    <Button startIcon={<ArrowBack />} onClick={() => goBack()} color="primary">
    Go Back 
      </Button>
      </Box>
  );
}

  return (
    <Grid container spacing={3}>
    <Grid item lg={5} xl={4}>
    <DetailsHeader artistId={artistId} artistData={artistData} />

    <RelatedSongsQuery data={Object.values(artistData?.song)}
      artistId={artistId}
      isPlaying={isPlaying}
      activeSong={activeSong}
    />
    </Grid>
   </Grid>
  );
};

export default Artists
