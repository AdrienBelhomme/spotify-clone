import { Box, Grid } from '@mui/material';
import { useGetWorldChartsQuery } from '../services/shazam';
import CardAlbum from './CardAlbum';

const Albums = () => {
  const { data: songData } = useGetWorldChartsQuery();
  //  console.log(data);
  console.log(songData);
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
        <Grid container spacing={3}>
          <Grid
            item
            xs={6}
            sm={4}
            md={4}
            lg={3}
            xl={3}
            sx={{ display: 'flex' }}
          >
            {songData?.map((song, i) => {
              return (
                <CardAlbum
                  songs={songData}
                  key={song.key}
                  song={song}
                  i={i}
                />
              );
            })}
          </Grid>
        </Grid>
      </Box>
    </div>

  );
};

export default Albums;
