import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Box, CircularProgress, useMediaQuery, Typography,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { useGetWorldChartsQuery } from '../../services/shazam';

const Songs = () => {
  const { data } = useGetWorldChartsQuery();
} 

console.log(data);

function Home() {
  return (
    <div>
      Home
      <Link to="./Artists/"><button>Artists</button></Link>
      <Link to="./Albums/"><button>Albums</button></Link>

    </div>

  );
}

export default Home;
