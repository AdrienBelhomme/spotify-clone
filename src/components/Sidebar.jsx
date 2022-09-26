import { List, ListItem, ListItemIcon, ListItemText, ListSubheader, Divider, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { useDispatch } from 'react-redux';

import { selectGenre } from '../features/currentGenre';
import logoLight from '../assets/images/Music_UNIVERSE__3_-removebg-preview.png';
import logoDark from '../assets/images/Music_UNIVERSE__2_-removebg-preview.png';
import genreIcons from '../assets/genres';

const categories = [
  { label: 'Home', value: 'home' },
  { label: 'Album', value: 'album' },
  { label: 'Artist', value: 'artist' },
  { label: 'TopChart', value: 'topchart' },
];

const genre = [
  { label: 'Pop', value: 'POP' },
  { label: 'Dance', value: 'DANCE' },
];

const Sidebar = ({ setMobileOpen }) => {
  const theme = useTheme();
  const dispatch = useDispatch();

  return (
    <Box justifyContent="center">
      <Link to="/">
        <img
          className="App-logo"
          src={theme.palette.mode === 'light' ? logoLight : logoDark}
          alt="musicuniverselogo"
          style={{ justifyContent: 'center', display: 'flex' }}
        />
      </Link>
      <Divider />
      <List>
        <ListSubheader> Browse Music UNIVERSE</ListSubheader>
        {categories.map(({ label, value }) => {
          return (
            <Link
              to="/"
              key={value}
              sx={{
                '&:hover': {
                  backgroundColor: 'blue',
                },
              }}
              style={{ textDecoration: 'none', color: theme.palette.secondary.main }}
            >
              <ListItem onClick={() => { }}>
                <ListItemIcon>
                  <img
                    src={genreIcons[label.toLowerCase()]}
                    alt="genreimage"
                    height={40}
                    sx={{ filter: theme.palette.mode === 'dark' ? 'Invert(1)' : 'dark' }}
                  />
                </ListItemIcon>
                <ListItemText primary={label} />
              </ListItem>
            </Link>
          );
        })}
      </List>
      <Divider />
      <List>
        <ListSubheader> Browse by genre</ListSubheader>
        {genre.map(({ label, value }) => {
          return (
            <Link
              to="/"
              key={value}
              style={{ textDecoration: 'none', color: theme.palette.secondary.main }}
            >
              <ListItem onClick={() => { return dispatch(selectGenre(value)); }}>
                <ListItemIcon>
                  {/* <img
                    src={genreIcons[label.toLowerCase()]}
                    alt="genreimage"
                    height={40}
                    sx={{ filter: theme.palette.mode === 'dark' ? 'Invert(1)' : 'dark' }}
                  /> */}
                </ListItemIcon>
                <ListItemText primary={label} />
              </ListItem>
            </Link>
          );
        })}
      </List>

    </Box>
  );
};

export default Sidebar;
