import React, { useRef, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { useDispatch, useSelector } from 'react-redux';

import { setDuration, setPlayed, setPlayedSeconds, setSeeking } from '../features/playerSlice';

const ReactMusicPlayer = (props) => {
  const { refForPlayer } = props;
  // const refPlayer = useRef(null);
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

  const load = (urlState) => {
    setControls({
      url: urlState,
      played: 0,
      loaded: 0,
      pip: false,
    });
  };

  const handlePlayPause = () => {
    setControls({ ...controls, playing: !controls.playing });
  };

  const handleToggleControls = () => {
    const { url } = controls;
    setControls({
      controls: !controls.controls,
      url: null,
    }, () => controls.load(url));
  };

  const handleSeekMouseDown = (e) => {
    setControls({ ...controls, seeking: true });
  };

  const handleSeekChange = (e) => {
    console.log(e.target.value);
    setControls({ ...controls, played: parseFloat(e.target.value) });
  };

  const handleSeekMouseUp = (e) => {
    setIsSeeking(false);
    refForPlayer.current.seekTo(parseFloat(e.target.value));
  };

  const handleProgress = (state) => {
    // We only want to update time slider if we are not currently seeking
    if (!controls.seeking) {
      setControls({ ...controls, played: state.played, playedSeconds: state.playedSeconds });
    }
  };

  const handleEnded = () => {
    console.log('onEnded');
    setControls({ ...controls, playing: controls.loop });
  };

  const handlePause = () => {
    console.log('onPause');
    setControls({ ...controls, playing: false });
  };

  const handleDuration = (duration) => {
    console.log('onDuration', duration);
    setControls({ ...controls, duration });
  };

  useEffect(() => {
    setControls({ ...controls, url: songUrl });
  }, [songUrl]);

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
      <h1>ReactPlayer Demo</h1>
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
          onReady={() => console.log('onReady')}
          onStart={() => console.log('onStart')}
          onPause={handlePause}
          onBuffer={() => console.log('onBuffer')}
          onSeek={(e) => console.log('onSeek', e)}
          onEnded={handleEnded}
          onError={(e) => console.log('onError', e)}
          onProgress={handleProgress}
          onDuration={handleDuration}
        />
      </div>
      <input
        type="range"
        min={0}
        max={0.999999}
        step="any"
        value={controls.played}
        onMouseDown={handleSeekMouseDown}
        onChange={handleSeekChange}
        onMouseUp={handleSeekMouseUp}
      />
    </div>
  );
};

export default ReactMusicPlayer;
