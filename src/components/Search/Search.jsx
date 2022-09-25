import React, { useState } from 'react';
import { InputAdornment, TextField, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import search from '../../assets/images/search.png';
import { useTheme } from '@mui/material/styles';

const Search = () => {
    const [query, setQuery] = useState('');
    // const dispatch = useDispatch();
    const location = useLocation();
    const theme = useTheme();

    const handleSearch = (event) => {

    };
    if (location.pathname !== '/') return 'null';
    return (
        <Paper sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 1000, }} >
            <TextField
                value={query}
                variant='outlined'
                size="small"
                fullWidth
                placeholder='Search Artist, Songs ..'
                onKeyPress={handleSearch}
                onChange={(event) => setQuery(event.target.value)}
                InputProps={{
                    'aria-label': 'Search Artist, Songs ..',
                    startAdornment: (
                        <InputAdornment position="start">
                            <img src={search} width='35px' />
                        </InputAdornment>
                    ),
                }}

            />
        </Paper>

    );
};

export default Search;