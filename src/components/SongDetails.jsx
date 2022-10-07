import React from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Paper, Box } from '@mui/material';

import { useGetSongDetailsQuery } from '../services/shazam';

const SongDetails = () => {
  const { trackId } = useParams();
  const { data: songData } = useGetSongDetailsQuery({ trackId });

  return (
    <div>
      <h3>
        {songData?.title}
      </h3>
      <h4>
        {songData?.key}
      </h4>
      {console.log(songData)}
      {songData?.title}
      <Box>
        <Grid>
          {songData?.sections[1].type === 'LYRICS'
            ? songData?.sections[1].text.map((line, i) => {
              return (
                <p>{line}</p>
              );
            }) : <p>Sorry, no lyrics found</p>}

        </Grid>

      </Box>
    </div>
  );
};

export default SongDetails;
