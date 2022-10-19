import { styled } from '@mui/material/styles';
import { Box, Paper, Grid } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: '20px 20px',
  textAlign: 'center',
  background: 'transparent',
  color: theme.palette.text.secondary,
  borderRadius: '12px',
  border: '1px solid rgba(246, 129, 30, 0.25)',
  marginRight: '4%',
}));

const CardAlbum = ({ song }) => {
  const navigate = useNavigate();
  return (
    <Box sx={{ width: 'fit-content' }}>
      <Grid container sx={{ display: 'flex' }}>
        <Item
          onClick={() => {
            navigate(`../SongDetails/${song?.key}`);
            console.log(song?.key);
          }}
        >
          <img
            src={song.images?.coverart}
            alt="song_img"
            loading="lazy"
            width="180px"
            height="180px"
            style={{ borderRadius: '15px' }}
          />
          <h3 style={{ textAlign: 'left', color: '#2E3271', fontWeight: '600', fontSize: '16px', margin: '12px 0',
          }}
          >
            <Link to={`../SongDetails/${song?.key}`}>
              {song?.title}
            </Link>

          </h3>
          <h4>
            {song.subtitle}
          </h4>

        </Item>
      </Grid>
    </Box>
  );
};

export default CardAlbum;
