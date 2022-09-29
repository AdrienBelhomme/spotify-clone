<<<<<<< HEAD
import { Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => {
  return {
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  };
});

const GridForGenre = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      spacing={5}
      sx={{ backgroundColor: 'grey' }}
    >
      <Grid item xs={6} sm={4} md={3} lg={2} xl={1}>
        <Item>Country 1</Item>
      </Grid>
      <Grid item xs={6} sm={4} md={3} lg={2} xl={1}>
        <Item>Country 2</Item>
      </Grid>

    </Grid>
=======
import { Box, Grid } from '@mui/material';
import CardCountry from './CardCountry';
import { topCountries } from './countryList';

const GridForGenre = (props) => {
  const { data } = props;

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
        <h1 style={{ marginTop: 0 }}>Top charts by country</h1>
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
            {topCountries.map((country, i) => {
              return <CardCountry key={i} data={data} country={country.name} />;
            })}

          </Grid>
        </Grid>
      </Box>

    </div>
>>>>>>> musics-by-country
  );
};

export default GridForGenre;
