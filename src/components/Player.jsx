import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Box, Typography, Slider, IconButton, Stack, useMediaQuery } from '@mui/material';
import { PauseRounded, PlayArrowRounded, FastForwardRounded, FastRewindRounded, VolumeUpRounded, VolumeDownRounded } from '@mui/icons-material';
import logoLight from '../assets/images/Music_UNIVERSE__2_-removebg-preview.png';

const Widget = styled('div')(({ theme }) => {
  return {
    padding: 16,
    borderRadius: 16,
    width: 200,
    height: '100%',
    maxWidth: '100%',
    margin: 'auto',
    position: 'relative',
    zIndex: 1,
    backgroundColor:
    theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.4)',
    backdropFilter: 'blur(40px)',
  };
});

const CoverImage = styled('div')({
  width: 100,
  height: 100,
  objectFit: 'cover',
  overflow: 'hidden',
  flexShrink: 0,
  borderRadius: 8,
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
  const [position, setPosition] = React.useState(32);
  const [paused, setPaused] = React.useState(false);
  function formatDuration(value) {
    const minute = Math.floor(value / 60);
    const secondLeft = value - minute * 60;
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  }
  const mainIconColor = theme.palette.mode === 'dark' ? '#fff' : '#000';
  const lightIconColor = theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)';
  return (

    <Box sx={{ width: '100%', overflow: 'hidden', padding: '10px' }}>
      {!isMobile ? (
        <Widget>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <CoverImage>
              <img
                alt="can't win - Chilling Sunday"
                src={logoLight}
              />
            </CoverImage>
            <Box sx={{ ml: 1.5, minWidth: 0 }}>
              <Typography variant="caption" color="text.secondary" fontWeight={500}>
                Jun Pulse
              </Typography>
              <Typography noWrap>
                <b>คนเก่าเขาทำไว้ดี (Can&apos;t win)</b>
              </Typography>
              <Typography noWrap letterSpacing={-0.25}>
                Chilling Sunday &mdash; คนเก่าเขาทำไว้ดี
              </Typography>
            </Box>
          </Box>
          <Slider
            aria-label="time-indicator"
            size="small"
            value={position}
            min={0}
            step={1}
            max={duration}
            onChange={(_, value) => { return setPosition(value); }}
            sx={{
              color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
              height: 4,
              '& .MuiSlider-thumb': {
                width: 8,
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
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mt: -1,
            }}
          >
            <IconButton aria-label="previous song">
              <FastRewindRounded fontSize="large" htmlColor={mainIconColor} />
            </IconButton>
            <IconButton
              aria-label={paused ? 'play' : 'pause'}
              onClick={() => { return setPaused(!paused); }}
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
            <IconButton aria-label="next song">
              <FastForwardRounded fontSize="large" htmlColor={mainIconColor} />
            </IconButton>
          </Box>
          <Stack spacing={2} direction="row" sx={{ mb: 1, px: 1 }} alignItems="center">
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
      )
        : (
          <Widget>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mt: -1,
              }}
            >
              <IconButton aria-label="previous song">
                <FastRewindRounded fontSize="large" htmlColor={mainIconColor} />
              </IconButton>
              <IconButton
                aria-label={paused ? 'play' : 'pause'}
                onClick={() => { return setPaused(!paused); }}
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
              <IconButton aria-label="next song">
                <FastForwardRounded fontSize="large" htmlColor={mainIconColor} />
              </IconButton>
            </Box>
          </Widget>
        )}
    </Box>
  );
};
export default MusicPlayerSlider;
