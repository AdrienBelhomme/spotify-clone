import { Autocomplete, Box, CircularProgress, TextField, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectGenre } from '../features/currentGenre.js';
import { useGetWorldChartsByCountryQuery } from '../services/shazam.js';

import shazamList from './countryList.js';
import GridForGenre from './GridForGenre.jsx';
import GridForMusic from './GridForMusic.jsx';

const MusicByCountry = () => {
  const [inputValue, setInputValue] = useState(shazamList[17].name);
  const [dataCountry, setDataCountry] = useState(shazamList[17]);
  const dispatch = useDispatch();

  const updateCountry = useSelector((state) => {
    return state.currentGenre.countryCodeAndName;
  });

  useEffect(() => {
    console.log(updateCountry);
    setDataCountry(updateCountry);
  }, [updateCountry]);

  /* const { countryName } = useSelector((state) => { return state.currentGenre; });
  const { countryCode } = useSelector((state) => { return state.currentGenre; });
  const { countryCodeAndName } = useSelector((state) => { return state.currentGenre; }); */

  const { data, isFetching, error } = useGetWorldChartsByCountryQuery(dataCountry === null || undefined ? 'FR' : dataCountry.code);

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography>
        unknow error
      </Typography>
    );
  }

  return (
    <div>

      <GridForGenre data={data} country={inputValue} />

      <Autocomplete
        sx={{ width: 300 }}
        value={dataCountry}
        onChange={(event, newValue) => {
          console.log(newValue);
          setDataCountry(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="dropdown-selector"
        options={shazamList}
        getOptionLabel={(option) => { return option.name; }}
        renderOption={(props, country) => {
          return (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
              <img
                loading="lazy"
                width="20"
                src={`https://flagcdn.com/w20/${country.code.toLowerCase()}.png`}
                srcSet={`https://flagcdn.com/w40/${country.code.toLowerCase()}.png 2x`}
                alt=""
              />
              {country.name}
            </Box>
          );
        }}
        renderInput={(params) => {
          return (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <TextField {...params} label="Select a country" />
          );
        }}
      />

      <GridForMusic data={data} country={inputValue} />

    </div>

  );
};

export default MusicByCountry;
