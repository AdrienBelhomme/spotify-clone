import { styled } from '@mui/material/styles';
import { Box, CircularProgress, IconButton, Paper } from '@mui/material';
import { PlayCircleOutline } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { topCountries } from './countryList';
import { useGetWorldChartsByCountryQuery } from '../services/shazam.js';
import { selectGenre } from '../features/currentGenre.js';

const Item = styled(Paper)(({ theme }) => {
  return {
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: '20px 20px',
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius: '12px',
    background: 'transparent',
    border: '1px solid rgba(246, 129, 30, 0.25)',
    marginRight: '4%',
  };
});

const CardCountry = (props) => {
  const { data, countryName, countryCode, index } = props;
  const countryData = topCountries;
  const dispatch = useDispatch();

  // const { allCountryData, isFetching } = useGetWorldChartsByCountryQuery(countryData === null || undefined ? 'FR' : countryData[0].code);

  /* if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  } */

  return (
    <Item>
      <div style={{ position: 'relative' }}>
        <img
          src={`${data[index].images.background}`}
          srcSet={`${data[index].images.background}`}
          alt={`${data[index].title}-cover`}
          loading="lazy"
          width="180px"
          height="180px"
          style={{ borderRadius: '15px' }}
        />
        <IconButton
          onClick={() => { return dispatch(selectGenre({ code: countryCode, name: countryName })); }}
          aria-label="play"
          variant="soft"
          size="large"
          sx={{ position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            color: 'white',
          }}
        >
          <PlayCircleOutline fontSize="inherit" />
        </IconButton>
      </div>

      <h3 style={{ textAlign: 'left', color: '#2E3271', fontWeight: '600', fontSize: '16px', margin: '12px 0',
      }}
      >
        {countryName}
      </h3>
      <h4 style={{ margin: 0, textAlign: 'left', color: 'rgba(124, 141, 181, 0.75)', fontSize: '14px', fontWeight: '400' }}>
        Top 10
      </h4>
    </Item>
  );
};

export default CardCountry;
