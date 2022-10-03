import React, { useState } from 'react';
import { Box, Button, CircularProgress, Grid,Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';

import { useGetArtistDetailsQuery, useGetRelatedSongsQuery } from '../services/shazam.js';

const Artists = () => {
 const { artistsId } = useParams();
 const page = 1;

 const { data, isFetching, error } = useGetArtistDetailsQuery(artistsId);
 
 if (isFetching) {
  return (
    <Box display="flex" justifyContent="center">
      <CircularProgress size="7rem" />
    </Box>
  );
}

if (error) {
  console.log(error);
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
    <Button startIcon={<ArrowBack />} onClick={() => goBack()} color="primary">
    Go Back
      </Button>
      </Box>
  );
}

  return (
    <>
    <Grid container spacing={3}>
    <Grid item lg={5} xl={4}>
    <img
   src={`https://is3-ssl.mzstatic.com/image/thumb/Features125/v4/02/1f/ea/021fea7b-9acd-3dd9-c833-68781a5c764a/mza_12805048796106822393.png/{w}x{h}bb.jpg`}
   alt=""
/>
    </Grid>
    <Grid item lg={7} xl={8} style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
   <Typography variant="h2" gutterBottom>
    {data?.name}
   </Typography>
   <Typography variant="h5" gutterBottom>
    Born: {new data(data?.birthday).toDateString()}
   </Typography>
   <Typography variant="body2" align="justify" paragraph>
    {data?.biography || 'Sorry, no bigraphy yet ...'}
   </Typography>
   <Box marginTop="2rem' display="flex" justifyContent="space-around">
   <Button variant="contained" color="primary" target="_blank" href={`https://is3-ssl.mzstatic.com/name/${data?.}`}>
     Shazam
   </Button>
   <Button startIcon={<ArrowBack />} onClick={() => 
   </Box>
   </Grid>
   </Grid>
    </>
  );
};

export default Artists