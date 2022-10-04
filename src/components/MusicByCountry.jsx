/* eslint-disable no-console */
import { Autocomplete, Box, CircularProgress, TextField, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { selectGenre } from '../features/currentGenre.js';
import { useGetWorldChartsByCountryQuery } from '../services/shazam.js';

import shazamList from './countryList.js';
import GridForGenre from './GridForGenre.jsx';
import GridForMusic from './GridForMusic.jsx';

const MusicByCountry = () => {
  const [inputValue, setInputValue] = useState(shazamList[17].name);
  const [dataCountry, setDataCountry] = useState(shazamList[17]);
  // const dispatch = useDispatch();

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
        <CircularProgress size="4rem" />
      </Box>
    );
  }

  if (error) {
    console.log(error);
    return (
      <Typography>
        unknow error
      </Typography>
    );
  }

  return (
    <div>

      <GridForGenre data={data} country={inputValue} />

      <GridForMusic data={data} country={inputValue} />

    </div>

  );
};

export default MusicByCountry;
