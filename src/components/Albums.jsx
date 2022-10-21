import { Box, Grid, Typography } from '@mui/material';
import { useGetWorldChartsQuery } from '../services/shazam';

import CardAlbum from './CardAlbum';
import Loader from './Loader';

const Albums = () => {
  const { data: songData, isFetching, error } = useGetWorldChartsQuery();
  console.log(songData);

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <Loader />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography>
        unknow error
      </Typography>
    );
  }

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
        <h1 style={{ marginTop: 0 }}>Albums</h1>
        <Grid container spacing={3} sx={{ display: 'flex' }}>
          {songData?.map((song, i) => (
            <Grid sx={{ margin: '1%' }} key={song.key}>
              <CardAlbum
                songs={songData}
                key={song.key}
                song={song}
                i={i}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>

  );
};

export default Albums;
