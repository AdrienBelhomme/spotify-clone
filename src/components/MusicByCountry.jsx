import { Box, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useGetCountriesQuery, useGetWorldChartsByCountryQuery } from '../services/shazam.js';

import GridForGenre from './GridForGenre.jsx';
import GridForMusic from './GridForMusic.jsx';
import Loader from './Loader';

const MusicByCountry = () => {
  const { data: dataShazam, isFetchingShazam, errorShazam } = useGetCountriesQuery();

  if (isFetchingShazam) {
    return (
      <Box display="flex" justifyContent="center">
        <Loader />
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

  const initialStateValue = !isFetchingShazam && dataShazam ? shazamList[17].name : 'France';
  const initialStateDataCountry = !isFetchingShazam && dataShazam ? shazamList[17] : { code: 'FR', name: 'France' };

  const [inputValue, setInputValue] = useState(initialStateValue);
  const [dataCountry, setDataCountry] = useState(initialStateDataCountry);

  const updateCountry = useSelector((state) => {
    return state.currentGenre.countryCodeAndName;
  });

  const updateCountryNameOnly = useSelector((state) => {
    return state.currentGenre.countryName;
  });

  useEffect(() => {
    setInputValue(updateCountryNameOnly);
  }, [updateCountryNameOnly]);

  useEffect(() => {
    setDataCountry(updateCountry);
  }, [updateCountry]);

  const { data, isFetching, error } = useGetWorldChartsByCountryQuery(dataCountry === null || undefined ? 'FR' : dataCountry.code);

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <Loader />
      </Box>
    );
  }

  if (error) {
    // console.log(error);
    return (
      <Typography>
        unknow error
      </Typography>
    );
  }

  return (
    <div>

      <GridForGenre data={data} country={inputValue} countriesList={shazamList} />

      <GridForMusic data={data} country={inputValue} />

    </div>

  );
};

export default MusicByCountry;
