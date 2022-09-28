import { Box, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => {
  return {
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  };
});

const GridForGenre = () => {
  return (
    <Box
      mt={2}
      mb={5}
      sx={{
        width: '100%',
        height: 300,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: '40px',
        flexGrow: 1,
      }}
    >

      <Grid
        justifyContent="flex-start"
        alignItems="center"
        container
      >
        <Grid container item xs={6} sm={4} md={3} lg={2} xl={1}>
          <Item>Country 1</Item>
        </Grid>
        <Grid container item xs={6} sm={4} md={3} lg={2} xl={1}>
          <Item>Country 2</Item>
        </Grid>

      </Grid>
    </Box>
  );
};

export default GridForGenre;
