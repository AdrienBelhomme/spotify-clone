/* eslint-disable no-console */
import { useState, useEffect, useRef } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Box, Typography, Slider, IconButton, Stack, useMediaQuery } from '@mui/material';
import { PauseRounded, PlayArrowRounded, FastForwardRounded, FastRewindRounded, VolumeUpRounded, VolumeDownRounded } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';

import logoLight from '../assets/images/Music_UNIVERSE__2_-removebg-preview.png';
// eslint-disable-next-line no-unused-vars
import { setActiveSong, setArtistAndSongAndImage, setDataAndIndex, setGlobalVolume, setPlayOrPause } from '../features/playerSlice';
import ReactMusicPlayer from './ReactMusicPlayer';
import './player.css';

const Widget = styled('div')(({ theme }) => ({
  boxShadow: theme.palette.mode === 'dark' ? '10px 0px 30px #bf0bcc' : '10px 0px 30px rgba(0,0,0,0.6)',
  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.6)' : 'white',
  backdropFilter: 'blur(40px)',
}));

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
  console.log(isSeeking);
  const [songDuration, setSongDuration] = useState(0);
  const [artistName, setArtistName] = useState('');
  const [songImage, setSongImage] = useState('');
  const [songName, setSongName] = useState('');
  const [globalData, setGlobalData] = useState({});
  const [globalIndex, setGlobalIndex] = useState(0);
  const [time, setTime] = useState({
    played: 0,
    playedSeconds: 0,
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

  const handleSeekMouseDown = () => {
    setIsSeeking(true);
  };

  const handleSeekMouseUp = () => {
    setIsSeeking(false);
  };

  const handleSeekChange = (e) => {
    setTime({ played: parseFloat(e.target.value) });
    refForPlayer.current.seekTo(parseFloat(e.target.value));
  };

  const updatePlayPause = (value) => {
    setPlay(value);
  };

  const selectNextMusic = () => {
    dispatch(setActiveSong(globalData[globalIndex + 1]?.hub?.actions[1]?.uri));
    dispatch(setArtistAndSongAndImage({ artist: globalData[globalIndex + 1].title, song: globalData[globalIndex + 1].subtitle, image: globalData[globalIndex + 1].images.coverart, alt: globalData[globalIndex + 1].title }));
    setGlobalIndex((prev) => prev + 1);
  };

  const selectPreviousMusic = () => {
    if (globalIndex >= 1) {
      dispatch(setActiveSong(globalData[globalIndex - 1]?.hub?.actions[1]?.uri));
      dispatch(setArtistAndSongAndImage({ artist: globalData[globalIndex - 1].title, song: globalData[globalIndex - 1].subtitle, image: globalData[globalIndex - 1].images.coverart, alt: globalData[globalIndex - 1].title }));
      setGlobalIndex((prev) => prev - 1);
    }
  };

  // Redux get global state to update the progress bar and position (time)
  const { playedSeconds, seeking, played, duration, song, artist, alt, image, dataSongs, currentIndex } = useSelector((state) => state.playerSlice);

  useEffect(() => {
    setGlobalData(dataSongs);
  }, [dataSongs]);

  useEffect(() => {
    setGlobalIndex(currentIndex);
  }, [currentIndex]);

  useEffect(() => {
    setSongDuration(duration);
  }, [duration]);

  useEffect(() => {
    setTime({ played, playedSeconds });
  }, [played]);

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

  useEffect(() => {
    setSongImage(image);
  }, [image]);

  useEffect(() => {
    setSongImage(image);
  }, [globalIndex]);

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
        <Box className="box-shadow">
          <ReactMusicPlayer refForPlayer={refForPlayer} updatePlayPause={updatePlayPause} />
          <Widget className="widget">
            <Box sx={{ alignItems: 'center', display: 'flex' }}>
              <div className="cover-image">
                <img
                  alt={alt}
                  src={songImage}
                />
              </div>
              <Box sx={{ width: 'fit-content', ml: 1.5 }}>
                <Typography variant="caption" color="text.secondary" fontWeight={500}>
                  {songName}
                </Typography>
                <Typography Wrap>
                  <b>{artistName}</b>
                </Typography>
              </Box>
            </Box>
            <Box sx={{ alignItems: 'center', width: '200px', margin: 'auto 0' }}>
              <Slider
                aria-label="time-indicator"
                size="small"
                value={time.played}
                min={0}
                step={0.05}
                max={0.999999}
                onMouseDown={handleSeekMouseDown}
                onChange={handleSeekChange}
                onMouseUp={handleSeekMouseUp}
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
                <Typography className="tinytext">{formatDuration(Math.floor(position))}</Typography>
                <Typography className="tinytext">-{formatDuration(Math.floor(songDuration - position))}</Typography>
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
              <IconButton aria-label="previous song" onClick={() => selectPreviousMusic(globalIndex)}>
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
              <IconButton aria-label="next song" onClick={() => selectNextMusic(globalIndex)}>
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
        </Box>
      ) : (
        <Box>
          <ReactMusicPlayer refForPlayer={refForPlayer} updatePlayPause={updatePlayPause} />
          <Widget style={{ overflow: 'hidden', display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '100%', height: '100px', padding: '10px' }}>
            <div className="cover-image">
              <img
                alt="can't win - Chilling Sunday"
                src={logoLight}
              />
            </div>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mt: -1,
              }}
            >
              <IconButton aria-label="previous song" onClick={() => selectPreviousMusic(globalIndex)}>
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
              <IconButton aria-label="next song" onClick={() => selectNextMusic(globalIndex)}>
                <FastForwardRounded fontSize="large" htmlColor={mainIconColor} />
              </IconButton>
            </Box>
          </Widget>
        </Box>
      )}
    </Box>
  );
};
export default Player;
