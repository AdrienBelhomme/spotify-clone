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

const CardAlbumArtist = (props) => {
  const { index, album, data, albums } = props;

  const navigate = useNavigate();
  return (
    <Box sx={{ width: 'fit-content' }}>
      <Grid container sx={{ display: 'flex' }}>
        <Item>
          <img
            src={albums[index][1]?.attributes?.artwork.url
              .replace(
                '{w}',
                albums[index][1]?.attributes?.artwork.width,
              )
              .replace(
                '{h}',
                albums[index][1]?.attributes?.artwork.height,
              )}
            srcSet={albums[index][1]?.attributes?.artwork.url
              .replace(
                '{w}',
                albums[index][1]?.attributes?.artwork.width,
              )
              .replace(
                '{h}',
                albums[index][1]?.attributes?.artwork.height,
              )}
            className="artist-img"
            alt={`${albums[index][1]?.attributes?.name}-cover`}
            loading="lazy"
            width="100px"
            height="auto"
            style={{ borderRadius: '20px' }}
          />
          <h3 style={{ textAlign: 'left', color: '#2E3271', fontWeight: '600', fontSize: '16px', margin: '12px 0',
          }}
          >

            <Link to={`../albums/${albums[index][1].id}`}>
              {albums[index][1]?.attributes?.name}
            </Link>

          </h3>
          <h4>
            {albums[index][1]?.attributes?.releaseDate.slice(0, 4)}
          </h4>
          <h4>
            {albums[index][1]?.attributes?.genreNames[0]}
          </h4>

        </Item>
      </Grid>
    </Box>
  );
};

export default CardAlbumArtist;
