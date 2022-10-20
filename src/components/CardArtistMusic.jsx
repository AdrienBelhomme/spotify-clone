/* eslint-disable prefer-const */
import { styled } from '@mui/material/styles';
import { CircularProgress, IconButton, Paper, Box } from '@mui/material';
import { Favorite, PlayCircleOutline, Chat } from '@mui/icons-material';

import './CardMusic.css';
import './cardArtistMusic.css';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { setActiveSong, setArtistAndSongAndImage, setDataAndIndex } from '../features/playerSlice';
import { useGetSongDetailsQuery } from '../services/shazam';
import './GridForMusic.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
}));

const CardArtistMusic = (props) => {
  const { data, index, songs, artist } = props;

  const [trackId, setTrackId] = useState(1481623884);

  const dispatch = useDispatch();

  const selectMusic = (i) => {
    dispatch(setActiveSong(songs[i][1].attributes.previews[0].url));
  };

  const dispatchArtistAndSongAndImage = (i) => {
    dispatch(setArtistAndSongAndImage({ artist: artist[0][1].attributes.name,
      song: songs[i][1].attributes.name,
      image: 'https://images.unsplash.com/photo-1609667083964-f3dbecb7e7a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
      alt: `${songs[i][1].attributes.name}-cover` }));
  };

  const setCurrentTrackId = (i) => {
    // eslint-disable-next-line prefer-destructuring
    setTrackId(songs[i][0]);
    console.log(trackId);
  };

  const { data: singleSongData } = useGetSongDetailsQuery(trackId);

  console.log(singleSongData);
  console.log(trackId);

  /* const selectDataAndIndex = (dataCard, indexCard) => {
      dispatch(setDataAndIndex({ data: dataCard, index: indexCard }));
    }; */

  return (
    <div className="card">
      {/* chart's rank */}
      <h3>
        { index + 1 }
      </h3>
      {/* Card Component */}
      <Item className="card-container">

        <div className="img">
          <img
            className="filter-img"
            src="https://images.unsplash.com/photo-1609667083964-f3dbecb7e7a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            srcSet="https://images.unsplash.com/photo-1609667083964-f3dbecb7e7a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            alt={`${songs[index][1].attributes.name}-cover`}
            loading="lazy"
            width="100px"
            height="auto"
            style={{ borderRadius: '20px' }}
          />
          <div className="play-button">
            <IconButton
              onClick={() => { selectMusic(index); dispatchArtistAndSongAndImage(index); setCurrentTrackId(index); }}
              aria-label="play"
              variant="soft"
              size="large"
              sx={{ position: 'absolute',
                top: '50%',
                left: '45%',
                transform: 'translate(-50%,-50%)',
                color: 'white',
              }}
            >
              <PlayCircleOutline sx={{ fontSize: '2.2rem' }} />
            </IconButton>
          </div>
        </div>
        <div className="action">
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h3 style={{ textAlign: 'left', color: '#2E3271', fontWeight: '600', fontSize: '16px', margin: '0',
            }}
            >
              {songs[index][1].attributes.name}
            </h3>
            <h4 style={{ margin: 0, textAlign: 'left', color: 'rgba(124, 141, 181, 0.75)', fontSize: '14px', fontWeight: '400' }}>
              {artist[0][1].attributes.name}
            </h4>
          </div>
          <div className="button-container">

            <IconButton
              onClick={() => {}}
              aria-label="favorite"
              variant="soft"
              size="large"
            >
              <Favorite />
            </IconButton>

            <IconButton
              onClick={() => {}}
              aria-label="chat"
              variant="soft"
              size="large"
            >
              <Chat />
            </IconButton>

          </div>
        </div>

      </Item>

    </div>

  );
};

export default CardArtistMusic;
