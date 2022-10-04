import { DataObject } from '@mui/icons-material';
import { Box, Grid } from '@mui/material';
import CardCountry from './CardCountry';

import { topCountries } from './countryList';
import CountrySelector from './CountrySelector';
import './GridForGenre.css';

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
        <CountrySelector data={data} />
        <Grid container sx={{ display: 'flex' }}>
          <Grid
            item
            sx={{
              display: 'flex',
              flexWrap: 'nowrap',
              paddingBottom: '25px',
              overflowX: 'auto' }}
            className="scroll-box"
          >
            {topCountries.map((country, i) => {
              return <CardCountry key={i} data={data} countryCode={country.code} countryName={country.name} index={i} />;
            })}

          </Grid>
        </Grid>
      </Box>

    </div>
  );
};

export default GridForGenre;
