/* eslint-disable no-console */
/* eslint-disable prefer-const */
import { styled, useTheme } from '@mui/material/styles';
import { IconButton, Paper } from '@mui/material';
import { Favorite, PlayCircleOutline, Chat } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import './CardMusic.css';
import './cardArtistMusic.css';
import { setActiveSong, setArtistAndSongAndImage } from '../features/playerSlice';
import './GridForMusic.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
}));

const CardArtistMusic = (props) => {
  const theme = useTheme();
  const { index, songs, artist, artistId } = props;

  // eslint-disable-next-line no-unused-vars
  const [trackId, setTrackId] = useState(1481623884);

  const dispatch = useDispatch();

  const selectMusic = (i) => {
    dispatch(setActiveSong(songs[i][1].attributes.previews[0].url));
  };

  const correctImageUrl = artist[0][1].attributes.artwork.url
    .replace(
      '{w}',
      artist[0][1].attributes.artwork.width,
    )
    .replace(
      '{h}',
      artist[0][1].attributes.artwork.height,

    );
  console.log(correctImageUrl);

  const dispatchArtistAndSongAndImage = (i) => {
    dispatch(setArtistAndSongAndImage({ artist: artist[0][1].attributes.name,
      song: songs[i][1].attributes.name,
      image: correctImageUrl,
      alt: `${songs[i][1].attributes.name}-cover` }));
  };

  const setCurrentTrackId = (i) => {
    // eslint-disable-next-line prefer-destructuring
    setTrackId(songs[i][0]);
  };

  return (
    <div className="cardmusic">
      {/* chart's rank */}
      <h3>
        { index + 1 }
      </h3>
      {/* Card Component */}
      <Item className="card-containermusic">

        <div className="img">
          <img
            src={artist[0][1].attributes.artwork.url
              .replace(
                '{w}',
                artist[0][1].attributes.artwork.width,
              )
              .replace(
                '{h}',
                artist[0][1].attributes.artwork.height,
              )}
            srcSet={artist[0][1].attributes.artwork.url
              .replace(
                '{w}',
                artist[0][1].attributes.artwork.width,
              )
              .replace(
                '{h}',
                artist[0][1].attributes.artwork.height,
              )}
            className="filter-img"
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
            <h3 style={{ textAlign: 'left', fontWeight: '600', fontSize: '16px', margin: '0', color: theme.palette.mode === 'dark' ? 'white' : '#2E3271',
            }}
            >
              {songs[index][1].attributes.name}
            </h3>
            <h4 style={{ margin: 0, textAlign: 'left', color: 'rgba(124, 141, 181, 0.75)', fontSize: '14px', fontWeight: '400' }}>
              <Link
                style={{ textDecoration: 'none',
                  color: theme.palette.mode === 'dark' ? 'white' : '#2E3271',
                  fontSize: '14px',
                  fontWeight: '400' }}
                to={`../artists/${artistId}`}
              >
                {artist[0][1].attributes.name}
              </Link>

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
