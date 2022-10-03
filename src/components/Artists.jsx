import React, { useState } from 'react';
import { Box, Button, CircularProgress, Grid,Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';

import { useGetArtistDetailsQuery } from '../services/shazam.js';

const Artists = () => {
 const { id } = useParams();

 const { data, isFetching, error } = useGetArtistDetailsQuery(id);

 if (isFetching) {
  return (
    <Box display="flex" justifyContent="center">
      <CircularProgress size="8rem" />
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
    className={classes.image}
    src={''}
    alt={data.name}
/>
   </Grid>
   </Grid>
    </>
  );
};

export default Artists