import { styled } from '@mui/material/styles';
import { IconButton, Paper } from '@mui/material';
import { PlayCircleOutline } from '@mui/icons-material';

import { selectGenre } from '../features/currentGenre.js';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: '20px 20px',
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderRadius: '12px',
  background: 'transparent',
  boxShadow: 'rgb(0 0 0 / 20%) 0px 25px 20px -20px',
}));

const CardCountry = (props) => {
  const { data, countryName, countryCode, index, changeCountry } = props;

  return (

    <div style={{ marginRight: '2%' }}>

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
            onClick={() => {
              changeCountry({ name: countryName, code: countryCode });
            }}
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
            <PlayCircleOutline sx={{ fontSize: '2.2rem' }} />
          </IconButton>
        </div>

        <h3 style={{ textAlign: 'left', color: '#2E3271', fontWeight: '600', fontSize: '16px', margin: '12px 0',
        }}
        >
          {countryName}
        </h3>
        <h4 style={{ margin: 0, textAlign: 'left', color: 'rgba(124, 141, 181, 0.75)', fontSize: '14px', fontWeight: '400' }}>
          Top 20
        </h4>
      </Item>
    </div>

  );
};

export default CardCountry;
