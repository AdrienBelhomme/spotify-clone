import React, { useState } from 'react';
import { InputAdornment, TextField, Paper } from '@mui/material';
import { useLocation } from 'react-router-dom';

import search from '../assets/images/search.png';

const Search = () => {
  const [query, setQuery] = useState('');
  const location = useLocation();

  const handleSearch = () => {};

  if (location.pathname !== '/') return 'null';

  return (
    <Paper sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 1000 }}>
      <TextField
        value={query}
        variant="outlined"
        size="small"
        fullWidth
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
  );
};

export default Search;
