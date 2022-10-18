import { Box, CircularProgress, Typography } from '@mui/material';

import { useGetCountriesQuery } from '../services/shazam';

const countryListApi = () => ('empty');

const countriesList = () => {
  const { data, isFetching, error } = useGetCountriesQuery();

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

  const shazamList = data.map((country) => ({
    name: country.name,
    code: country.code,
  }));

  return isFetching ? 'wait' : shazamList;
};

const topCountries = [
  { name: 'France', code: 'FR' },
  { name: 'United States', code: 'US' },
  { name: 'Canada', code: 'CA' },
  { name: 'United Kingdom', code: 'GB' },
  { name: 'Germany', code: 'DE' },
  { name: 'Mexico', code: 'MX' },
  { name: 'Japan', code: 'JP' },
  { name: 'Australia', code: 'AU' },
];

export default countryListApi;
export { topCountries, countriesList };
