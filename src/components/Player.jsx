import { useState, useEffect, forwardRef, useImperativeHandle, useRef } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Box, Typography, Slider, IconButton, Stack, useMediaQuery } from '@mui/material';
import { PauseRounded, PlayArrowRounded, FastForwardRounded, FastRewindRounded, VolumeUpRounded, VolumeDownRounded } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';

import logoLight from '../assets/images/Music_UNIVERSE__2_-removebg-preview.png';
import { setGlobalVolume, setPlayOrPause } from '../features/playerSlice';
import ReactMusicPlayer from './ReactMusicPlayer';

const Widget = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: 10,
  height: 100,
  left: 0,
  right: 0,
  maxWidth: '100%',
  margin: 'auto',
  position: 'relative',
  backgroundColor:
    theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.6)' : 'white',
  backdropFilter: 'blur(40px)',
}));

const CoverImage = styled('div')({
  width: 100,
  height: 100,
  objectFit: 'cover',
  overflow: 'hidden',
  flexShrink: 0,
  borderRadius: 60,
  backgroundColor: 'rgba(0,0,0,0.08)',
  '& > img': {
    width: '100%',
  },
});

const TinyText = styled(Typography)({
  fontSize: '0.75rem',
  opacity: 0.38,
  fontWeight: 500,
  letterSpacing: 0.2,
});

const Player = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const theme = useTheme();
  const dispatch = useDispatch();
  const mainIconColor = theme.palette.mode === 'dark' ? '#fff' : '#000';
  const lightIconColor = theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)';

  const [position, setPosition] = useState(0);
  const [play, setPlay] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [isSeeking, setIsSeeking] = useState(false);
  const [songDuration, setSongDuration] = useState(0);
  const [artistName, setArtistName] = useState('');
  const [songName, setSongName] = useState('');
  const [playedTime, setPlayedTime] = useState({
    played: 0,
    playedSeconds: 0
  });

  const refForPlayer = useRef(null);

  function formatDuration(value) {
    const minute = Math.floor(value / 60);
    const secondLeft = value - minute * 60;
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  }

  const handleVolumeChange = (e) => {
    setVolume(parseFloat(e.target.value));
  };

  const handleSeekMouseDown = (e) => {
    setIsSeeking(true);
  };

  const handleSeekMouseUp = (e) => {
    setIsSeeking(false);
    refForPlayer.current.seekTo(parseFloat(e.target.value));
  };

  const handleSeekChange = (e) => {
    console.log(e.target.value);
    setPlayedTime(parseFloat(e.target.value));
  };

  const handleProgress = (state) => {
    // We only want to update time slider if we are not currently seeking
    if (!controls.seeking) {
      setPlayedTime({ state.played, playedSeconds: state.playedSeconds });
    }
  };

  // Redux get global state to update the progress bar and position (time)
  const { playedSeconds, seeking, played, duration, song, artist } = useSelector((state) => state.playerSlice);

  useEffect(() => {
    setSongDuration(duration);
  }, [duration]);

  useEffect(() => {
    setIsSeeking(seeking);
  }, [seeking]);

  useEffect(() => {
    setPosition(playedSeconds);
  }, [playedSeconds]);

  useEffect(() => {
    setSongName(song);
  }, [song]);

  useEffect(() => {
    setArtistName(artist);
  }, [artist]);

  // Redux push to set global state and update the player volume and play/pause button
  useEffect(() => {
    dispatch(setPlayOrPause(play));
  }, [play]);

  useEffect(() => {
    dispatch(setGlobalVolume(volume));
  }, [volume]);

  return (
    <Box>
      {!isMobile ? (
        <Box sx={{ width: '100%',
          overflow: 'hidden',
          boxShadow: theme.palette.mode === 'dark' ? '10px 0px 30px #bf0bcc' : '10px 0px 30px rgba(0,0,0,0.6)',
        }}
        >
          <ReactMusicPlayer refForPlayer={refForPlayer} />
          <Widget>
            <Box sx={{ alignItems: 'center', display: 'flex' }}>
              <CoverImage>
                <img
                  alt="can't win - Chilling Sunday"
                  src={logoLight}
                />
              </CoverImage>
              <Box sx={{ ml: 1.5, minWidth: 0 }}>
                <Typography variant="caption" color="text.secondary" fontWeight={500}>
                  {songName}
                </Typography>
                <Typography noWrap>
                  <b>{artistName}</b>
                </Typography>
              </Box>
            </Box>
            <Box sx={{ alignItems: 'center', width: '200px', margin: 'auto 0' }}>
              <Slider
                aria-label="time-indicator"
                size="small"
                value={position}
                min={0}
                step={0.1}
                max={0.999999}
                // onMouseDown={handleSeekMouseDown}
                onChange={handleSeekChange}
                // onMouseUp={handleSeekMouseUp}
                className="slider-seeking"
                sx={{
                  color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
                  height: 4,
                  '& .MuiSlider-thumb': {
                    width: 4,
                    height: 8,
                    transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
                    '&:before': {
                      boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
                    },
                    '&:hover, &.Mui-focusVisible': {
                      boxShadow: `0px 0px 0px 8px ${
                        theme.palette.mode === 'dark'
                          ? 'rgb(255 255 255 / 16%)'
                          : 'rgb(0 0 0 / 16%)'
                      }`,
                    },
                    '&.Mui-active': {
                      width: 20,
                      height: 20,
                    },
                  },
                  '& .MuiSlider-rail': {
                    opacity: 0.28,
                  },
                }}
              />
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  mt: -2,
                }}
              >
                <TinyText>{formatDuration(Math.floor(position))}</TinyText>
                <TinyText>-{formatDuration(Math.floor(songDuration - position))}</TinyText>
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mt: -1,
              }}
            >
              <IconButton aria-label="previous song" onClick={() => {}}>
                <FastRewindRounded fontSize="large" htmlColor={mainIconColor} />
              </IconButton>
              <IconButton
                aria-label={play ? 'pause' : 'play'}
                onClick={() => setPlay((prevState) => !prevState)}
              >
                {play ? (
                  <PauseRounded sx={{ fontSize: '3rem' }} htmlColor={mainIconColor} />
                ) : (

                  <PlayArrowRounded
                    sx={{ fontSize: '3rem' }}
                    htmlColor={mainIconColor}
                  />
                )}
              </IconButton>
              <IconButton aria-label="next song" onClick={() => {}}>
                <FastForwardRounded fontSize="large" htmlColor={mainIconColor} />
              </IconButton>
            </Box>
            <Stack spacing={2} direction="row" sx={{ mb: 1, px: 1 }} alignItems="center" width="200px">
              <VolumeDownRounded htmlColor={lightIconColor} />

              <Slider
                aria-label="Volume"
                defaultValue={0.3}
                step={0.1}
                min={0}
                max={1}
                value={volume}
                onChange={handleVolumeChange}
                sx={{
                  color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
                  '& .MuiSlider-track': {
                    border: 'none',
                  },
                  '& .MuiSlider-thumb': {
                    width: 24,
                    height: 24,
                    backgroundColor: '#fff',
                    '&:before': {
                      boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
                    },
                    '&:hover, &.Mui-focusVisible, &.Mui-active': {
                      boxShadow: 'none',
                    },
                  },
                }}
              />
              <VolumeUpRounded htmlColor={lightIconColor} />
            </Stack>
          </Widget>
          {/* <WallPaper /> */}
        </Box>
      ) : (
        <Box sx={{ width: '100%',
          overflow: 'hidden',
          boxShadow: theme.palette.mode === 'dark' ? '10px 0px 30px #bf0bcc' : '10px 0px 30px rgba(0,0,0,0.6)',
        }}
        >
          <Widget style={{ bottom: '0px', overflow: 'hidden', display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '100%', height: '100px', padding: '10px', boxShadow: '10px 0px 35px #bf0bcc' }}>
            <CoverImage>
              <img
                alt="can't win - Chilling Sunday"
                src={logoLight}
              />
            </CoverImage>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mt: -1,
              }}
            >
              <IconButton aria-label="previous song" onClick={() => console.log('clicked')}>
                <FastRewindRounded fontSize="large" htmlColor={mainIconColor} />
              </IconButton>
              <IconButton
                aria-label={play ? 'pause' : 'play'}
                onClick={() => console.log('clicked')}
              >
                {play ? (
                  <PauseRounded sx={{ fontSize: '3rem' }} htmlColor={mainIconColor} />
                ) : (
                  <PlayArrowRounded
                    sx={{ fontSize: '3rem' }}
                    htmlColor={mainIconColor}
                  />

                )}
              </IconButton>
              <IconButton aria-label="next song" onClick={() => {}}>
                <FastForwardRounded fontSize="large" htmlColor={mainIconColor} />
              </IconButton>
            </Box>
          </Widget>
          {/* <WallPaper /> */}
        </Box>
      )}
    </Box>
  );
};
export default Player;
