import { Autocomplete, Box, CircularProgress, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useGetWorldChartsByCountryQuery } from '../services/shazam.js';

import shazamList from './countryList.js';
import GridForGenre from './GridForGenre.jsx';

const MusicByCountry = () => {
  const [inputValue, setInputValue] = useState(shazamList[17].name);
  const [dataCountry, setDataCountry] = useState(shazamList[17]);

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

      <h1>Top charts by country</h1>

      <GridForGenre />

      <Autocomplete
        sx={{ width: 300 }}
        value={dataCountry}
        onChange={(event, newValue) => {
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

      <h3>{inputValue || 'Select a country'}</h3>
      <p>Artist:{data[0].subtitle}</p>
      <p>Song:{data[0].title}</p>
      <p>Image: <img src={`${data[0].images.background}`} width="100px" /> </p>
    </div>

  );
};

export default MusicByCountry;
