import { Box, Grid } from '@mui/material';
import CardMusic from './CardMusic';

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
            xs={6}
            sm={4}
            md={4}
            lg={3}
            xl={3}
            sx={{ display: 'flex' }}
          >
            {data.slice(0, 5).map((countrymap, i) => {
              return <CardMusic key={i} data={data} country={countrymap.name} index={i} />;
            })}

          </Grid>
        </Grid>
      </Box>

    </div>
  );
};

export default GridForGenre;
