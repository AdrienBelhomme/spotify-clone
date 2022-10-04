import { Autocomplete, Box, TextField } from '@mui/material';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectGenre } from '../features/currentGenre.js';

const CountrySelector = (props) => {
  const { countriesList } = props;

  const initialStateValue = countriesList ? countriesList[17].name : 'France';
  const initialStateDataCountry = countriesList ? countriesList[17] : { code: 'FR', name: 'France' };

  const [inputValue, setInputValue] = useState(initialStateValue);
  const [dataCountry, setDataCountry] = useState(initialStateDataCountry);
  const dispatch = useDispatch();

  const updateCountry = useSelector((state) => {
    return state.currentGenre.countryCodeAndName;
  });

  useEffect(() => {
    setDataCountry(updateCountry);
  }, [updateCountry]);

  return (

    <Autocomplete
      sx={{ width: 300, margin: '2% 0' }}
      value={dataCountry}
      onChange={(event, newValue) => {
        dispatch(selectGenre({ name: newValue.name, code: newValue.code }));
        setDataCountry(newValue);
      }}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      id="dropdown-selector"
      options={countriesList}
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

  );
};

export default CountrySelector;
