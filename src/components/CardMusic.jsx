/* eslint-disable no-console */
import { styled, useTheme } from '@mui/material/styles';
import { IconButton, Paper } from '@mui/material';
import { Favorite, PlayCircleOutline, Chat } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import './CardMusic.css';
import { setActiveSong, setArtistAndSongAndImage, setDataAndIndex } from '../features/playerSlice';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
}));

const CardMusic = (props) => {
  const theme = useTheme();
  const { data, index, rank } = props;

  const dispatch = useDispatch();

  const selectMusic = (i) => {
    dispatch(setActiveSong(data[i]?.hub?.actions[1]?.uri));
  };

  const selectDataAndIndex = (dataCard, indexCard) => {
    dispatch(setDataAndIndex({ data: dataCard, index: indexCard }));
  };

  const dispatchArtistAndSongAndImage = (i) => {
    dispatch(setArtistAndSongAndImage({ artist: data[i].title, song: data[i].subtitle, image: data[i].images.coverart, alt: data[i].title }));
  };

  return (
    <div className="cardmusic">
      {/* chart's rank */}
      <h3>
        { rank ? rank.start + index + 1 : index + 1 }
      </h3>
      {/* Card Component */}
      <Item className="card-containermusic">

        <div className="img">
          <img
            className="filter-img"
            src={data[index].images.coverart}
            srcSet={data[index].images.coverart}
            alt={`${data[index].title}-cover`}
            loading="lazy"
            width="100px"
            height="auto"
            style={{ borderRadius: '20px' }}
          />
          <div className="play-button">
            <IconButton
              onClick={() => { selectMusic(index); dispatchArtistAndSongAndImage(index); selectDataAndIndex(data, index); }}
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
            <h3 style={{ textAlign: 'left',
              color: theme.palette.mode === 'dark' ? 'white' : '#2E3271',
              fontWeight: '600',
              fontSize: '16px',
              margin: '0',
            }}
            >
              <Link to={`../SongDetails/${data[index].key}`}>
                {data[index].title}
              </Link>
            </h3>
            <h4 style={{ margin: 0,
              textAlign: 'left',
              color: 'rgba(124, 141, 181, 0.75)',
              fontSize: '14px',
              fontWeight: '400',
            }}
            >

              <Link
                style={{ textDecoration: 'none',
                  color: theme.palette.mode === 'dark' ? 'white' : '#2E3271',
                  fontSize: '14px',
                  fontWeight: '400' }}
                to={`../artists/${data[index].artists[0].adamid}`}
              >
                {data[index].subtitle}
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

export default CardMusic;
