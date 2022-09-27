import { Autocomplete, Box, CircularProgress, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useGetWorldChartsByCountryQuery } from '../services/shazam.js';

const genres = [
  { label: 'DE', country: 'Deutshcland' },
  { label: 'PT', country: 'PT' },
  { label: 'DK', country: 'DK' },
  { label: 'HR', country: 'HR' },
  { label: 'UA', country: 'UA' },
  { label: 'HU', country: 'HU' },
  { label: 'MA', country: 'MA' },
  { label: 'ID', country: 'ID' },
  { label: 'US', country: 'US' },
  { label: 'EG', country: 'EG' },
  { label: 'IL', country: 'IL' },
  { label: 'UY', country: 'UY' },
  { label: 'IN', country: 'IN' },
  { label: 'ZA', country: 'ZA' },
  { label: 'IT', country: 'IT' },
  { label: 'MX', country: 'MX' },
  { label: 'MY', country: 'MY' },
  { label: 'ES', country: 'ES' },
  { label: 'VE', country: 'VE' },
  { label: 'AR', country: 'AR' },
  { label: 'AT', country: 'AT' },
  { label: 'AU', country: 'AU' },
  { label: 'RO', country: 'RO' },
  { label: 'NL', country: 'NL' },
  { label: 'NO', country: 'NO' },
  { label: 'BE', country: 'BE' },
  { label: 'RU', country: 'RU' },
  { label: 'FI', country: 'FI' },
  { label: 'BG', country: 'BG' },
  { label: 'JP', country: 'JP' },
  { label: 'FR', country: 'FR' },
  { label: 'NZ', country: 'NZ' },
  { label: 'SA', country: 'SA' },
  { label: 'BR', country: 'BR' },
  { label: 'SE', country: 'SE' },
  { label: 'SG', country: 'SG' },
  { label: 'BY', country: 'BY' },
  { label: 'GB', country: 'GB' },
  { label: 'CA', country: 'CA' },
  { label: 'CH', country: 'CH' },
  { label: 'KR', country: 'KR' },
  { label: 'CL', country: 'CL' },
  { label: 'GR', country: 'GR' },
  { label: 'CN', country: 'CN' },
  { label: 'CO', country: 'CO' },
  { label: 'KZ', country: 'KZ' },
  { label: 'CR', country: 'CR' },
  { label: 'TH', country: 'TH' },
  { label: 'PE', country: 'PE' },
  { label: 'CZ', country: 'CZ' },
  { label: 'PL', country: 'PL' },
  { label: 'TR', country: 'TR' },
];

const MusicByCountry = () => {
  // const [countryId, setCountryId] = useState(genres[0].label);
  const [inputValue, setInputValue] = useState(genres[0].label);
  const [value, setValue] = useState(genres[0]);

  const { data, isFetching, error } = useGetWorldChartsByCountryQuery(value.label);

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
      <div>MusicByCountry</div>
      <h1>Select a country</h1>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="dropdown-selector"
        options={genres}
        sx={{ width: 300 }}
        renderInput={(params) => {
          console.log(params);
          return (
            <TextField {...params} label="Country" />
          );
        }}
      />

      <h3>{value.country}</h3>
      <p>Artist:{data[0].subtitle}</p>
      <p>Song:{data[0].title}</p>
      <p>Image: <img src={`${data[0].images.background}`} /> </p>
    </div>

  );
};

export default MusicByCountry;
