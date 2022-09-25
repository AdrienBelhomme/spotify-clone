import { Link } from 'react-router-dom';
import { Box, CircularProgress, Grid } from '@mui/material';

import { useGetWorldChartsQuery } from '../services/shazam';

const Home = () => {
  const { data, error, isFetching } = useGetWorldChartsQuery();

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  }

  return (
    <div>
      Home
      <Link to="./Artists/"><button type="button">Artists</button></Link>
      <Link to="./Albums/"><button type="button">Albums</button></Link>
      <Grid container />
      <div>Test API. Artist: {data[0].artists[0].alias}</div>
    </div>
  );
};

export default Home;
