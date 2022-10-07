import React from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Paper, Box } from '@mui/material';

import { useGetSongDetailsQuery } from '../services/shazam';
import './SongDetails.css';

const SongDetails = () => {
  const { trackId } = useParams();
  const { data: songData } = useGetSongDetailsQuery({ trackId });

  return (
    <div>
      {console.log(songData)}
      <h1>
        {songData?.title}
      </h1>

      <Grid container>
        <img
          className="rounded-image"
          width="200"
          height="200"
          alt="coverart"
          src={songData?.images?.coverart}
        />
        <p className="p">
          <h3>
            {songData?.subtitle}
          </h3>
          {songData?.genres?.primary}
        </p>
      </Grid>

      <Grid className="related-song">
        Related Songs
      </Grid>

      <Box>
        <h2>
          Lyrics
        </h2>
        <Grid className="lyric-container">
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
