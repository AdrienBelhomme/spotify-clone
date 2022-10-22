
import { Box, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

import './cardAlbumArtist.css';

const CardAlbumArtist = (props) => {
  const { index, albums } = props;
  const theme = useTheme();

  return (
    <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between', margin: '1rem 0' }}>
      <Grid container sx={{ display: 'flex', justifyContent: 'flex-start' }}>
        <div className="img-album" style={{ alignItems: 'flex-start' }}>
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
        </div>
        <div className="title-album" style={{ display: 'flex', alignItems: 'center', marginLeft: '5rem' }}>
          <h3 style={{ textAlign: 'left', color: '#2E3271', fontWeight: '600', fontSize: '16px', margin: '12px 0',
          }}
          >

            <Link
              style={{ textDecoration: 'none',
                color: theme.palette.mode === 'dark' ? 'white' : '#2E3271',
                fontSize: '14px',
                fontWeight: '400' }}
              to={`../albums/${albums[index][1].id}`}
            >
              {albums[index][1]?.attributes?.name}
            </Link>

          </h3>
          <h4 style={{ margin: '0 2rem' }}>
            {albums[index][1]?.attributes?.releaseDate.slice(0, 4)}
          </h4>
          <h4>
            {albums[index][1]?.attributes?.genreNames[0]}
          </h4>

        </div>
      </Grid>
    </Box>
  );
};

export default CardAlbumArtist;
