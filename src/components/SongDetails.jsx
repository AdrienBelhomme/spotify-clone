import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Grid, Box, Button } from '@mui/material';

import { useGetSongDetailsQuery, useGetRelatedSongsQuery } from '../services/shazam';
import './SongDetails.css';
import Loader from './Loader';

const SongDetails = () => {
  const navigate = useNavigate();
  const { trackId } = useParams();
  const { data: songData } = useGetSongDetailsQuery({ trackId });
  const { data: trackData } = useGetRelatedSongsQuery({ trackId });

    <Loader />;
    console.log(songData);
    console.log(trackData);
    return (
      <div>

        <Grid className="related-song">
          <h2>
            Related Songs
          </h2>
          <br />
          {trackData?.slice(0, 5)?.map((name, i) => (
            <Grid className="related-song-card">
              <Button
                onClick={() => { navigate(`../SongDetails/${trackData[i]?.key}`); }}
              >
                <img
                  className="rounded-image"
                  alt="coverart"
                  src={trackData[i]?.images?.coverart}
                />
                <p className="p">
                  <h3>
                    {trackData[i]?.title}
                  </h3>
                  {trackData[i]?.subtitle}
                </p>
              </Button>
            </Grid>
          ))};
        </Grid>

        <h1>
          {songData?.title}
        </h1>

        <Grid container>
          <Button
            onClick={() => { window.open(`${songData?.url}`, '_blank'); }}
          >
            <img
              className="rounded-image"
              alt="coverart"
              src={songData?.images?.coverart}
            />
          </Button>
          <p className="p">
            <h3>
              {songData?.subtitle}
            </h3>
            {songData?.genres?.primary}
          </p>
        </Grid>

        <Box>
          <h2>
            Lyrics
          </h2>
          <Grid className="lyric-container">
            {songData?.sections[1].type === 'LYRICS'
              ? songData?.sections[1].text.map((line) => (
                <p>{line}</p>
              )) : <p>Sorry, no lyrics found</p>}
          </Grid>
        </Box>

      </div>
    );
};

export default SongDetails;
