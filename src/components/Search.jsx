import React, { useState } from 'react';
import { InputAdornment, TextField, Paper, useMediaQuery } from '@mui/material';
// import { useLocation } from 'react-router-dom';

import search from '../assets/images/search.png';

const Search = () => {
  const [query, setQuery] = useState('');
  // const location = useLocation();
  const isMobile = useMediaQuery('(max-width:600px)');
  const handleSearch = () => {};

  //   if (location.pathname !== '/') return 'null';

  return (
    <div>
      {!isMobile ? (
        <Paper sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '350px', boxShadow: '0px 0px 7px 7px white' }}>
          <TextField
            value={query}
            variant="standard"
            size="small"
            fullWidth
            placeholder="Search Artist, Songs .."
            onKeyPress={handleSearch}
            onChange={(event) => { return setQuery(event.target.value); }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <img src={search} width="35px" />
                </InputAdornment>
              ),
            }}
          />
        </Paper>
      ) : (
        <Paper sx={{ p: '1px 4px', display: 'flex', alignItems: 'center', boxShadow: '0px 0px 7px 7px white' }}>
          <TextField
            value={query}
            variant="standard"
            size="small"
            placeholder="Search Artist, Songs .."
            onKeyPress={handleSearch}
            onChange={(event) => { return setQuery(event.target.value); }}
            InputProps={{
              'aria-label': 'Search Artist, Songs ..',
              startAdornment: (
                <InputAdornment position="start">
                  <img src={search} width="35px" />
                </InputAdornment>
              ),
            }}
          />
        </Paper>
      )}
    </div>
  );
};

export default Search;
