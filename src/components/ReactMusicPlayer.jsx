/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { useDispatch, useSelector } from 'react-redux';

import { setDuration, setPlayed, setPlayedSeconds, setSeeking } from '../features/playerSlice';

const ReactMusicPlayer = (props) => {
  const { refForPlayer, updatePlayPause } = props;
  const dispatch = useDispatch();

  const [controls, setControls] = useState({
    url: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/87/a2/c8/87a2c876-dfbd-a57e-2c13-dbd6fc3cba77/mzaf_4085762200601715015.plus.aac.ep.m4a',
    pip: false,
    playing: false,
    controls: false,
    light: false,
    volume: 0.3,
    muted: false,
    played: 0,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,
    loop: false,
    seeking: false,
    playedSeconds: 0,
  });

  const { songUrl, isPlaying, volume } = useSelector((state) => state.playerSlice);

  const handleProgress = (state) => {
    // We only want to update time slider if we are not currently seeking
    if (!controls.seeking) {
      setControls({ ...controls, played: state.played, playedSeconds: state.playedSeconds });
    }
  };

  const handleEnded = () => {
    updatePlayPause(false);
  };

  const handlePause = () => {
    console.log('onPause');
    setControls({ ...controls, playing: false });
  };

  const handleDuration = (duration) => {
    setControls({ ...controls, duration });
  };

  useEffect(() => {
    setControls({ ...controls, url: songUrl });
  }, [songUrl]);

  /* useEffect(() => {
    setControls({ ...controls, url: songUrl });
  }, [currentIndex]); */

  useEffect(() => {
    setControls({ ...controls, playing: isPlaying });
  }, [isPlaying]);

  useEffect(() => {
    setControls({ ...controls, volume });
  }, [volume]);

  // set global state

  useEffect(() => {
    dispatch(setPlayedSeconds(controls.playedSeconds));
  }, [controls.playedSeconds]);

  useEffect(() => {
    dispatch(setPlayed(controls.played));
  }, [controls.played]);

  useEffect(() => {
    dispatch(setSeeking(controls.seeking));
  }, [controls.seeking]);

  useEffect(() => {
    dispatch(setDuration(controls.duration));
  }, [controls.duration]);

  return (
    <div>
      <div className="player-wrapper">
        <ReactPlayer
          ref={refForPlayer}
          className="react-player"
          width="100%"
          height="100%"
          url={controls.url}
          playing={controls.playing}
          controls={controls.controls}
          light={controls.light}
          loop={controls.loop}
          playbackRate={controls.playbackRate}
          volume={controls.volume}
          muted={controls.muted}
          onStart={() => {}}
          onPause={handlePause}
          onBuffer={() => {}}
          onSeek={() => {}}
          onEnded={handleEnded}
          onError={(e) => console.log('onError', e)}
          onProgress={handleProgress}
          onDuration={handleDuration}
        />
      </div>
    </div>
  );
};

export default ReactMusicPlayer;
