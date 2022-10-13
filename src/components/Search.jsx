/* eslint-disable no-console */
import React, { useState } from 'react';
import { InputAdornment, TextField, Paper, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { searchSongs } from '../features/currentGenre';
import search from '../assets/images/search.png';

const Search = () => {
  const [query, setQuery] = useState('');
  const theme = useTheme();
  const dispatch = useDispatch();
  const isMobile = useMediaQuery('(max-width:600px)');
  const location = useLocation();

  const handleSearch = (event) => {
    if (event.key === 'Enter') { dispatch(searchSongs(query)); }
  };
  if (location.pathname !== '/') { return 'null'; }

  return (
    <div>

      <Paper
        variant="outlined"
        sx={{ p: '1px 4px',
          display: 'flex',
          alignItems: 'center',
          boxShadow: theme.palette.mode === 'dark'
            ? '0px 0px 10px 3px #bf0bcc'
            : '0px 0px 10px 3px rgba(0,0,0,0.6)' }}
      >
        <TextField
          value={query}
          variant="standard"
          size="small"
          placeholder="Search Artist, Songs .."
          onKeyPress={handleSearch}
          onChange={(event) => { return setQuery(event.target.value); }}
          sx={{ width: isMobile ? '200px' : '350px', background: 'transparent' }}
          InputProps={{
            'aria-label': 'Search Artist, Songs ..',
            startAdornment: (
              <InputAdornment position="start">
                <img src={search} width="30px" />
              </InputAdornment>
            ),
          }}
        />
      </Paper>

    </div>
  );
};

export default Search;

