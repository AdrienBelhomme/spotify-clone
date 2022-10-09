import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';
import playerSlice, { setActiveSong, globalStateUrl } from '../features/playerSlice';

const ReactMusicPlayer = (props) => {
  const { musicUrl, paused } = props;

  const [play, setPlay] = useState({
    url: musicUrl,
    pip: false,
    playing: false,
    controls: false,
    light: false,
    volume: 0.8,
    muted: false,
    played: 0,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,
    loop: false,
  });

  // const urlMusicRedux = useSelector(globalStateUrl);

  const { songUrl } = useSelector((state) => { return state.playerSlice; });
  console.log(songUrl);

  const load = (urlState) => {
    setPlay({
      url: urlState,
      played: 0,
      loaded: 0,
      pip: false,
    });
  };

  useEffect(() => {
    setPlay({ ...play, url: songUrl });
  }, [songUrl]);

  /*   const handlePlay = () => {
    console.log('onPlay');
    setPlay({ playing: true });
  }; */

  const handlePlayPause = () => {
    setPlay({ ...play, playing: !play.playing });
  };

  console.log(play.url);

  const handleToggleControls = () => {
    const { url } = play;
    setPlay({
      controls: !play.controls,
      url: null,
    }, () => { return play.load(url); });
  };

  return (
    <div>
      <h1>ReactPlayer Demo</h1>
      <div className="player-wrapper">
        <ReactPlayer
          ref={play.ref}
          className="react-player"
          width="100%"
          height="100%"
          url={play.url}
          pip={play.pip}
          playing={play.playing}
          controls={play.controls}
          light={play.light}
          loop={play.loop}
          playbackRate={play.playbackRate}
          volume={play.volume}
          muted={play.muted}
          onReady={() => { return console.log('onReady'); }}
          onStart={() => { return console.log('onStart'); }}
          // onPlay={handlePlay}
          // onEnablePIP={play.handleEnablePIP}
          // onDisablePIP={play.handleDisablePIP}
          onPause={play.handlePause}
          onBuffer={() => { return console.log('onBuffer'); }}
         // onPlaybackRateChange={play.handleOnPlaybackRateChange}
          onSeek={(e) => { return console.log('onSeek', e); }}
          // onEnded={play.handleEnded}
          onError={(e) => { return console.log('onError', e); }}
          // onProgress={play.handleProgress}
          // onDuration={play.handleDuration}
        />
      </div>
      <button type="button" onClick={handlePlayPause}>{play.playing ? 'Pause' : 'Play'}</button>
    </div>
  );
};

export default ReactMusicPlayer;
