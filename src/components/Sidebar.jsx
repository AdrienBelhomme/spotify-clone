import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, ListSubheader, Divider, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
// import { useDispatch } from 'react-redux';

// import { selectGenre } from '../features/currentGenre';
import { logoLight, logoDark } from '../assets/index';
import genreIcons from '../assets/genres';

const categories = [
  { label: 'Home', to: '/', value: 'home' },
  { label: 'Album', to: '/albums/:id', value: 'album' },
  { label: 'Artist', to: '/artists/:id', value: 'artist' },
  { label: 'TopChart', to: '/country', value: 'topchart' },
];

// eslint-disable-next-line no-unused-vars
const genre = [
  { label: 'Pop', value: 'POP' },
  { label: 'Dance', value: 'DANCE' },
];

const Sidebar = () => {
  const theme = useTheme();
  return (
    <Box justifyContent="center">
      <Link to="/">
        <img
          className="App-logo"
          src={theme.palette.mode === 'light' ? logoDark : logoLight}
          alt="musicuniverselogo"
          style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', width: '100%', height: '55%', objectFit: 'cover' }}
        />
      </Link>
      <Divider />
      <List>
        <ListSubheader> Browse Music UNIVERSE</ListSubheader>
        {categories.map((item) => (
          <Link
            color="inherit"
            to={item.to}
            key={item.value}
            style={{ textDecoration: 'none', color: theme.palette.primary.main }}
          >
            <ListItem onClick={() => { }}>
              <ListItemIcon>
                <img
                  src={genreIcons[item.label.toLowerCase()]}
                  alt="genreimage"
                  height={40}
                />
              </ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItem>
          </Link>
        ))}
      </List>

    </Box>
  );
};

export default Sidebar;
