import { styled } from '@mui/material/styles';
import { IconButton, Paper } from '@mui/material';
import { PlayCircleOutline } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
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
  };
});

const CardCountry = (props) => {
  const { data, countryName, countryCode, index } = props;
  const [countryData, setCountryData] = useState({ name: 'France', code: 'FR' });
  const dispatch = useDispatch();

  /*   const multipleQueries = () => {
    countryCode.map((code, index) => {
      const { dataCountry, isFetching } = useGetWorldChartsByCountryQuery(code);
    });
  }; */

  /* if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  } */
  return (
    <div style={{ marginRight: '10%' }}>

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
            onClick={() => { return dispatch(selectGenre({ name: countryName, code: countryCode })); }}
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
    </div>
  );
};

export default CardCountry;
