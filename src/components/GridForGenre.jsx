import { Grid, Paper } from '@mui/material';
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
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      spacing={5}
      sx={{ backgroundColor: 'grey' }}
    >
      <Grid item xs={6} sm={4} md={3} lg={2} xl={1}>
        <Item>Country 1</Item>
      </Grid>
      <Grid item xs={6} sm={4} md={3} lg={2} xl={1}>
        <Item>Country 2</Item>
      </Grid>

    </Grid>
  );
};

export default GridForGenre;
