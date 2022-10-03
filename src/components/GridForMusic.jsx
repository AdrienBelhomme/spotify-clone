import { Box, Grid } from '@mui/material';
import CardMusic from './CardMusic';
import TopOneCard from './TopOneCard';

const GridForGenre = (props) => {
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
        <h1 style={{ marginTop: 0 }}>Top charts for {country}</h1>
        <Grid container sx={{ display: 'flex' }}>
          <Grid
            item
            sx={{ display: 'flex', flexDirection: 'column' }}
          >
            {data.slice(0, 10).map((countrymap, i) => {
              return <CardMusic key={i} data={data} country={countrymap.name} index={i} />;
            })}

          </Grid>
          <TopOneCard data={data} country={country} />
        </Grid>
      </Box>

    </div>
  );
};

export default GridForGenre;
