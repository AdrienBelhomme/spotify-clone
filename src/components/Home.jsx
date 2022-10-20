/* eslint-disable no-console */
import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Grid } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

import CardMusic from './CardMusic';
import './GridForMusic.css';
import { useGetWorldChartsQuery, useSearchSongsQuery } from '../services/shazam';
import Loader from './Loader';
import Search from './Search';

const Home = () => {
  const { query } = useSelector((state) => state.currentGenre);

  const { data, isFetching, error } = useSearchSongsQuery(query);
  const { data: worldData, isFetching: worldIsFetching, error: worldError } = useGetWorldChartsQuery();

  const songs = data?.tracks?.hits.map((song) => song.track);

  if (isFetching) return <Loader title={`Searching ${query}...`} />;
  if (worldIsFetching) return <Loader />;

  if (error) { <div>unknown error</div>; }
  if (worldError) { <div>unknown error</div>; }

  const margin = true;

  return (

    <div>
      <Box
        mt={4}
        mb={4}
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          borderRadius: '40px',
          flexGrow: 1,
          padding: '3%',
        }}
      >
        <h1 style={{ marginTop: 0 }}>Search for {query || 'what inspires you today'}</h1>
        <div style={{ margin: '3rem' }}>
          <Search margin={margin} />
        </div>
        <Grid container sx={{ display: 'flex' }}>
          <Grid
            item
            sx={{ display: 'flex',
              flexDirection: 'column',
            }}
          >
            {songs?.map((song, index) => (
              <CardMusic key={song.key} data={songs} index={index} />
            ))}

          </Grid>
          <Grid sx={{ marginBottom: '6rem' }}>
            <h2 style={{ marginTop: '1rem' }}>Discover Top world charts</h2>
            {worldData?.slice(0, 20).map((song, index) => (
              <CardMusic key={index} data={worldData} index={index} />
            ))}
          </Grid>

        </Grid>
      </Box>

    </div>
  );
};
export default Home;
