/* eslint-disable no-console */
import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Grid } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

// import CardMusic from './CardMusic';
import './GridForMusic.css';
import { useSearchSongsQuery } from '../services/shazam';
import Loader from './Loader';

const Home = () => {
  const { query } = useSelector((state) => { return state.currentGenre; });

  const { data, isFetching, error } = useSearchSongsQuery(query);
  console.log('Here', data);

  const songs = data?.tracks?.hits.map((song) => { return song.track; });

  if (isFetching) return <Loader title={`Searching ${query}...`} />;

  if (error) {
    return (
      <div>
        unknown error
      </div>
    );
  }
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
        <h1 style={{ marginTop: 0 }}>Search for {query || 'France'}</h1>
        <Grid container sx={{ display: 'flex' }}>
          <Grid
            item
            sx={{ display: 'flex',
              flexDirection: 'column',
            }}
          >
            {songs?.map((song) => {
              return (
                <div key={song.key}>
                  <p>{song.title}</p>
                  <img src={song.images.coverart} alt="searchimg" />
                </div>
              );
            })}

          </Grid>

        </Grid>
      </Box>

    </div>
  );
};
export default Home;
