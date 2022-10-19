import { Box, Grid } from '@mui/material';
import { useGetArtistDetailsQuery, useGetWorldChartsQuery } from '../services/shazam';
import CardAlbum from './CardAlbum';

const Albums = () => {
  const { data: songData } = useGetWorldChartsQuery();
  const { artistId } = useGetArtistDetailsQuery();
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
        <Grid container spacing={3} sx={{ display: 'flex' }}>
          {songData?.map((song, i) => (
            <div>
              <Grid sx={{ margin: '1%' }}>
                <CardAlbum
                  songs={songData}
                  key={song.key}
                  song={song}
                  i={i}
                />
              </Grid>
            </div>
          ))}
        </Grid>
      </Box>
    </div>

  );
};

export default Albums;
