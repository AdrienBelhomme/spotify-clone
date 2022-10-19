import { styled } from '@mui/material/styles';
import { IconButton, Paper } from '@mui/material';
import { Favorite, PlayCircleOutline, Chat } from '@mui/icons-material';

import './CardMusic.css';
import { useDispatch } from 'react-redux';
import { setActiveSong, setArtistAndSongAndImage, setDataAndIndex } from '../features/playerSlice';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
}));

const CardArtistMusic = (props) => {
  const { data, index, songs } = props;

  console.log(songs);
  console.log(songs[index][1].attributes.artwork.url);

  const dispatch = useDispatch();

  /* const selectMusic = (i) => {
    dispatch(setActiveSong(songs[i][1].attributes.previews[0].url));
  };  */

  /* const selectDataAndIndex = (dataCard, indexCard) => {
    dispatch(setDataAndIndex({ data: dataCard, index: indexCard }));
  };

  const dispatchArtistAndSongAndImage = (i) => {
    dispatch(setArtistAndSongAndImage({ artist: data[i].title, song: data[i].subtitle, image: data[i].images.coverart, alt: data[i].title }));
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
            src={songs[index][1].attributes.artwork.url}
            srcSet={songs[index][1].attributes.artwork.url}
            alt={`${songs[index][1].attributes.artwork}-cover`}
            loading="lazy"
            width="100px"
            height="auto"
            style={{ borderRadius: '20px' }}
          />
          <div className="play-button">
            <IconButton
              // onClick={() => { selectMusic(index); dispatchArtistAndSongAndImage(index); selectDataAndIndex(data, index); }}
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
              {/*  {data[index].subtitle} */}
              subtitle
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
