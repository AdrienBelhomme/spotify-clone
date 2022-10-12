import { Box, CircularProgress, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import { useGetCountriesQuery, useGetWorldChartsByCountryQuery } from '../services/shazam.js';

import GridForGenre from './GridForGenre.jsx';
import GridForMusic from './GridForMusic.jsx';
import Loader from './Loader';

const MusicByCountry = () => {
  const { data: dataShazam, isFetchingShazam, errorShazam } = useGetCountriesQuery();

  if (isFetchingShazam) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  }

  if (errorShazam) {
    return (
      <Typography>
        unknow error
      </Typography>
    );
  }

  const shazamList = !isFetchingShazam && dataShazam && dataShazam.map((country) => {
    return {
      name: country.name,
      code: country.code,
    };
  });

  const [dataCountry, setDataCountry] = useState(!isFetchingShazam && dataShazam ? shazamList[31] : { code: 'FR', name: 'France' });

  const changeCountry = (country) => {
    setDataCountry(country);
  };

  const { data, isFetching, error } = useGetWorldChartsByCountryQuery(dataCountry === null || undefined ? 'FR' : dataCountry.code);

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <Loader />
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

      {shazamList && <GridForGenre data={data} countrySelected={dataCountry} countriesList={shazamList} changeCountry={changeCountry} />}

      {data && <GridForMusic data={data} country={dataCountry.name} />}

    </div>

  );
};

export default MusicByCountry;
