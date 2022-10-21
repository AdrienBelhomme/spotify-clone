/* eslint-disable no-console */
import React, { useState } from 'react';
import { InputAdornment, TextField, Paper, useMediaQuery } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { searchSongs } from '../features/currentGenre';
import search from '../assets/images/search.png';

const Search = (props) => {
  const { margin } = props;
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const isMobile = useMediaQuery('(max-width:600px)');
  const location = useLocation();

  const handleSearch = (event) => {
    console.log(event.target.value);
    console.log(query);
    if (event.key === 'Enter') dispatch(searchSongs(query));
  };
  if (location.pathname !== '/') { return null; }

  return (
    <div style={margin ? { marginBottom: '5rem' } : {}}>

      <Paper
        sx={{
          padding: '0.7rem',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <TextField
          value={query}
          variant="standard"
          size="small"
          placeholder="Search Artist, Songs .."
          onKeyPress={handleSearch}
          onChange={(event) => setQuery(event.target.value)}
          sx={{ width: isMobile ? '200px' : '350px', background: 'transparent' }}
          InputProps={{
            'aria-label': 'Search Artist, Songs ..',
            startAdornment: (
              <InputAdornment position="start">
                <img src={search} width="20px" />
              </InputAdornment>
            ),
          }}
        />
      </Paper>

    </div>
  );
};

export default Search;

