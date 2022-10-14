import { Box, Grid } from '@mui/material';
import CardMusic from './CardMusic';
import TopOneCard from './TopOneCard';
import './GridForMusic.css';

const GridForMusic = (props) => {
  const { data, country } = props;

  return (
    <div>
      <Box
        mt={4}
        mb={4}
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          borderRadius: '40px',
          flexGrow: 1,
          padding: '3%',
        }}
      >
        <h1 style={{ marginTop: 0 }}>Top charts for {country || 'France'}</h1>
        <Grid container sx={{ display: 'flex' }}>
          <Grid
            item
            sx={{ display: 'flex',
              flexDirection: 'column',
              marginBottom: '3rem',
            }}
          >
            {data.slice(0, 20).map((countrymap, i) => <CardMusic key={i} data={data} country={countrymap.name} index={i} />)}

          </Grid>
          <TopOneCard data={data} country={country} />
        </Grid>
      </Box>

    </div>
  );
};

export default GridForMusic;
