import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => {
  return {
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: '20px 20px',
    textAlign: 'center',
    background: 'transparent',
    color: theme.palette.text.secondary,
    borderRadius: '12px',
    border: '1px solid rgba(246, 129, 30, 0.25)',
    marginRight: '4%',
  };
});

const CardAlbum = ({song}) => {
  const { data, index } = song;
  return (
    <Item>
      <img
        src={`${data[0].images.background}`}
        srcSet={`${data[0].images.background}`}
        alt={`${data[0].title}-cover`}
        loading="lazy"
        width="180px"
        height="180px"
        style={{ borderRadius: '15px' }}
      />
      <h3 style={{ textAlign: 'left', color: '#2E3271', fontWeight: '600', fontSize: '16px', margin: '12px 0',
      }}
      >
        {index}
      </h3>
      <h4 style={{ margin: 0, textAlign: 'left', color: 'rgba(124, 141, 181, 0.75)', fontSize: '14px', fontWeight: '400' }}>
        Top 10
      </h4>
    </Item>

  );
};

export default CardAlbum;
