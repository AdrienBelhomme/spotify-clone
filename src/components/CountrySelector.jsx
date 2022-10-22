import { Autocomplete, Box, TextField } from '@mui/material';
import { useState, useEffect } from 'react';

const CountrySelector = (props) => {
  const { countriesList, changeCountry, countrySelected } = props;

  const [value, setValue] = useState(countrySelected);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    setValue(countrySelected);
  }, [countrySelected]);

  return (

    <Autocomplete
      sx={{ width: '300px' }}
      value={value}
      onChange={(event, newValue) => {
        changeCountry({ code: newValue.code, name: newValue.name });
        setValue(newValue);
      }}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      id="dropdown-selector"
      options={countriesList}
      getOptionLabel={(option) => option.name}
      isOptionEqualToValue={(option, valueMui) => option.name === valueMui.name}
      renderOption={(prop, country) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...prop}>
          <img
            loading="lazy"
            width="20"
            src={`https://flagcdn.com/w20/${country.code.toLowerCase()}.png`}
            srcSet={`https://flagcdn.com/w40/${country.code.toLowerCase()}.png 2x`}
            alt=""
          />
          {country.name}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...params}
          label="Select a country"
          color="secondary"
          focused
          inputProps={{
            ...params.inputProps,
            color: 'black',
          }}
        />
      )}
    />

  );
};

export default CountrySelector;
