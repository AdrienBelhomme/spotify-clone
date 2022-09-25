import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Box, CircularProgress, useMediaQuery, Typography, Grid,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { useGetWorldChartsQuery } from '../../services/shazam';

const Home = () => {
  const { data, error, isFetching } = useGetWorldChartsQuery();
  console.log(data);



  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  }

  return (
    <div>
      Home
      <Link to="./Artists/"><button>Artists</button></Link>
      <Link to="./Albums/"><button>Albums</button></Link>
      <Grid container>
        
      </Grid>
      <div>Test API. Artist: {data[0].artists[0].alias}</div>

    </div>

  );
}

export default Home;
