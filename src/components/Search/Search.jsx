import React, { useState } from 'react';
import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import search from '../../assets/images/search.png';

const Search = () => {
    const [query, setQuery] = useState('');
    // const dispatch = useDispatch();
    const location = useLocation();

    const handleSearch = (event) => {

    };
    if (location.pathname !== '/') return 'null';
    return (
        <TextField
            value={query}
            variant='outlined'
            size="small"
            fullWidth
            placeholder='Search Artist, Songs ..'
            onKeyPress={handleSearch}
            onChange={(event) => setQuery(event.target.value)}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <img src={search} width='35px' />
                    </InputAdornment>
                ),
            }}

        />


    );
};

export default Search;