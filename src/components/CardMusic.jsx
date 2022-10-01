/* eslint-disable no-console */
import { styled } from '@mui/material/styles';
import { IconButton, Paper } from '@mui/material';
import { PlayCircleOutline } from '@mui/icons-material';

const Item = styled(Paper)(({ theme }) => {
  return {
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: '20px 20px',
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius: '12px',
    background: 'transparent',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  };
});

const CardCountry = (props) => {
  const { data, index } = props;

  const selectCountry = (i) => {
    console.log(data[i]?.hub?.actions[1]?.uri);
  };

  return (
    <div style={{ minWidth: '500px' }}>
      {/* chart's rank */}

      {/* Card Component */}
      <Item>
        <h3 style={{ width: '30px', marginRight: '15px', textAlign: 'left', color: '#2E3271', fontWeight: '600', fontSize: '16px', margin: '12px 0',
        }}
        >
          {index + 1}
        </h3>
        <div style={{ position: 'relative', display: 'flex' }}>
          <img
            src={`${data[index].images.background}`}
            srcSet={`${data[index].images.background}`}
            alt={`${data[index].title}-cover`}
            loading="lazy"
            width="120px"
            height="auto"
            style={{ borderRadius: '15px' }}
          />
          <IconButton
            onClick={() => { return selectCountry(index); }}
            aria-label="play"
            variant="soft"
            size="large"
            sx={{ position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%,-50%)',
              color: 'white',
            }}
          >
            <PlayCircleOutline fontSize="inherit" />
          </IconButton>

        </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h3 style={{ textAlign: 'left', color: '#2E3271', fontWeight: '600', fontSize: '16px', margin: '12px 0',
          }}
          >
            {data[index].title}
          </h3>
          <h4 style={{ margin: 0, textAlign: 'left', color: 'rgba(124, 141, 181, 0.75)', fontSize: '14px', fontWeight: '400' }}>
            {data[index].subtitle}
          </h4>
        </div>

      </Item>
    </div>
  );
};

export default CardCountry;
