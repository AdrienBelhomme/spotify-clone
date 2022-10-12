/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Box, Typography, Slider, IconButton, Stack, useMediaQuery } from '@mui/material';

import { PauseRounded, PlayArrowRounded, FastForwardRounded, FastRewindRounded, VolumeUpRounded, VolumeDownRounded } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import logoLight from '../assets/images/Music_UNIVERSE__2_-removebg-preview.png';
import { setActiveSong } from '../features/playerSlice';

// const WallPaper = styled('div')({
//   position: 'absolute',
//   borderRadius: 16,
//   width: '100%',
//   height: '100%',
//   top: 0,
//   left: 0,
//   overflow: 'hidden',
//   background: 'linear-gradient(rgb(255, 38, 142) 0%, rgb(255, 105, 79) 100%)',
//   transition: 'all 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s',
//   '&:before': {
//     content: '""',
//     width: '140%',
//     height: '140%',
//     position: 'absolute',
//     top: '-40%',
//     right: '-50%',
//     background:
//         'radial-gradient(at center center, rgb(62, 79, 249) 0%, rgba(62, 79, 249, 0) 64%)',
//   },
//   '&:after': {
//     content: '""',
//     width: '140%',
//     height: '140%',
//     position: 'absolute',
//     bottom: '-50%',
//     left: '-30%',
//     background:
//         'radial-gradient(at center center, rgb(247, 237, 225) 0%, rgba(247, 237, 225, 0) 70%)',
//     transform: 'rotate(30deg)',
//   },
// });

const Widget = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: 10,
  // borderTopRightRadius: 30,
  // borderTopLeftRadius: 30,
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

const MusicPlayerSlider = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const theme = useTheme();
  const duration = 200; // seconds
  const [position, setPosition] = useState(32);
  const [paused, setPaused] = useState({ play: false, pause: true });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActiveSong({ isPlaying: paused.play, isPause: paused.pause }));
  }, [paused]);

  const updatePlayerWithGlobalState = useSelector((state) => state.playerSlice.isPlayIsPause);

  console.log(updatePlayerWithGlobalState);

  function formatDuration(value) {
    const minute = Math.floor(value / 60);
    const secondLeft = value - minute * 60;
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  }
  const mainIconColor = theme.palette.mode === 'dark' ? '#fff' : '#000';
  const lightIconColor = theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)';
  return (
    <Box>
      {!isMobile ? (
        <Box sx={{ width: '100%',
          overflow: 'hidden',
          boxShadow: theme.palette.mode === 'dark' ? '10px 0px 30px #bf0bcc' : '10px 0px 30px rgba(0,0,0,0.6)',
        }}
        >
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
                  Somewhere i belong
                </Typography>
                <Typography noWrap>
                  <b>by Linken Park</b>
                </Typography>
              </Box>
            </Box>
            <Box sx={{ alignItems: 'center', width: '200px', margin: 'auto 0' }}>
              <Slider
                aria-label="time-indicator"
                size="small"
                value={position}
                min={0}
                step={1}
                max={duration}
                onChange={(_, value) => setPosition(value)}
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
                <TinyText>{formatDuration(position)}</TinyText>
                <TinyText>-{formatDuration(duration - position)}</TinyText>
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
                aria-label={paused.pause ? 'play' : 'pause'}
                onClick={() => setPaused((prevState) => ({ play: !prevState.play, pause: !prevState.pause }))}
              >
                {paused.pause ? (
                  <PlayArrowRounded
                    sx={{ fontSize: '3rem' }}
                    htmlColor={mainIconColor}
                  />
                ) : (
                  <PauseRounded sx={{ fontSize: '3rem' }} htmlColor={mainIconColor} />
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
                defaultValue={30}
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
                aria-label={paused ? 'play' : 'pause'}
                onClick={() => console.log('clicked')}
              >
                {paused ? (
                  <PlayArrowRounded
                    sx={{ fontSize: '3rem' }}
                    htmlColor={mainIconColor}
                  />
                ) : (
                  <PauseRounded sx={{ fontSize: '3rem' }} htmlColor={mainIconColor} />
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
export default MusicPlayerSlider;
