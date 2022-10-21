/* eslint-disable no-console */
import { PauseCircleOutline, PlayCircleOutline } from '@mui/icons-material';
import { Box, Grid, IconButton, Typography } from '@mui/material';
import { useState } from 'react';

const TopOneCard = (props) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const { data, country } = props;
  const playMusic = () => {
    setIsPlaying((prev) => !prev);
    if (isPlaying) {
      console.log('paused');
    } else {
      console.log(data[0]?.hub?.actions[1]?.uri);
    }
  };

  return (

    <Box
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: '40px',
        padding: '2%',
        height: 'max-content',
        marginLeft: '4%',
        width: '50%',
        position: 'sticky',
        top: 0,
      }}
    >
      <Grid container sx={{ display: 'flex', flexDirection: 'column' }}>

        <div className="img">

          <img
            src={`${data[0].images.coverart}`}
            srcSet={`${data[0].images.coverart}`}
            alt={`${data[0].title}-cover`}
            loading="lazy"
            width="250px"
            height="auto"
            style={{ borderRadius: '20px', margin: 'auto', marginBottom: '10%', boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px' }}
          />
          <IconButton
            onClick={() => playMusic()}
            aria-label="play"
            variant="soft"
            size="large"
            sx={{ position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%,-50%)',
              color: 'white',
            }}
          >
            {isPlaying ? <PauseCircleOutline sx={{ fontSize: '4rem' }} /> : <PlayCircleOutline sx={{ fontSize: '4rem' }} /> }

          </IconButton>
        </div>

        <Grid
          item
          sx={{ display: 'flex', flexDirection: 'column' }}
        >
          <Typography variant="h6" component="h6" sx={{ fontSize: '1rem', lineHeight: '1.6', color: 'rgba(124, 141, 181, 0.75)' }}>
            #1 in {country}
          </Typography>
          <Typography
            variant="h4"
            component="h4"
            sx={{
              fontSize: '1rem',
              fontWeight: 'bold',
              lineHeight: '1.6' }}
          >
            {data[0].title}
          </Typography>
          <Typography variant="h5" component="h5" sx={{ fontSize: '1rem', lineHeight: '1.6', color: 'rgba(124, 141, 181, 0.75)' }}>
            {data[0].subtitle}
          </Typography>

        </Grid>
      </Grid>
    </Box>

  );
};

export default TopOneCard;
