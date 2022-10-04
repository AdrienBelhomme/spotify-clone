/* eslint-disable no-console */
import { styled } from '@mui/material/styles';
import { IconButton, Paper } from '@mui/material';
import { Favorite, PlayCircleOutline, Chat } from '@mui/icons-material';
import './CardMusic.css';

const Item = styled(Paper)(({ theme }) => {
  return {
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    textAlign: 'center',
    background: '#FFFFFF',
    borderRadius: '24px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    color: 'white',
    width: '700px',
  };
});

const CardCountry = (props) => {
  const { data, index } = props;

  const selectMusic = (i) => {
    console.log(data[i]?.hub?.actions[1]?.uri);
  };

  return (
    <div className="card">
      {/* chart's rank */}
      <h3>
        {index + 1}
      </h3>
      {/* Card Component */}
      <Item className="card-container">

        <div className="img">
          <img
            className="filter-img"
            src={`${data[index].images.coverart}`}
            srcSet={`${data[index].images.coverart}`}
            alt={`${data[index].title}-cover`}
            loading="lazy"
            width="100px"
            height="auto"
            style={{ borderRadius: '20px' }}
          />
          <div className="play-button">
            <IconButton
              onClick={() => { return selectMusic(index); }}
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
              {data[index].title}
            </h3>
            <h4 style={{ margin: 0, textAlign: 'left', color: 'rgba(124, 141, 181, 0.75)', fontSize: '14px', fontWeight: '400' }}>
              {data[index].subtitle}
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

export default CardCountry;
