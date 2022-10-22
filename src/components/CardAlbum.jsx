/* eslint-disable no-console */
import { styled, useTheme } from '@mui/material/styles';
import { Box, Paper, Grid } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  background: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: '10px 30px',
  width: '280px',
  height: '330px',
  margin: '10px',
  textAlign: 'center',
  color: theme.palette.mode === 'dark' ? '#fff' : '#2E3271',
  borderRadius: '12px',
  marginRight: '4%',
}));

const CardAlbum = ({ song }) => {
  const theme = useTheme();
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
            style={{ borderRadius: '15px', paddingTop: '10px' }}
          />
          <h3 style={{ textAlign: 'center',
            fontWeight: '600',
            fontSize: '16px',
            margin: '12px 0',
            color: theme.palette.mode === 'dark' ? 'white' : '#2E3271' }}
          >
            <Link
              style={{ textDecoration: 'none',
                color: theme.palette.mode === 'dark' ? 'white' : '#2E3271',
                fontSize: '14px',
                fontWeight: '400' }}
              to={`../SongDetails/${song?.key}`}
            >
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
