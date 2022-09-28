import { useState, useContext } from 'react';
import { AppBar, Toolbar, Box, Drawer, useMediaQuery, IconButton } from '@mui/material';
import { Brightness4, Brightness7, Menu } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

import Sidebar from './Sidebar';
import Search from './Search';
import { ColorModeContext } from './utils/ToggleColorMode';

const drawerWidth = '200px';
const Navbar = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const colorMode = useContext(ColorModeContext);

  return (
    <>
      <AppBar
        position="fixed"
        style={{ display: 'flex', background: 'transparent', boxShadow: '0px 7px 7px white' }}
        sx={{ color: theme.palette.secondary.main }}
      >

        <Toolbar
          sx={{
            height: '80px',
            display: 'flex',
            justifyContent: 'space-between',
            marginLeft: '200px',
            [theme.breakpoints.down('sm')]:
                            { ml: 2, flexWrap: 'wrap' },

          }}
        >
          {isMobile && (
          <IconButton
            color="inherit"
            edge="start"
            style={{ outline: 'none' }}
            sx={{
              marginRight: theme.spacing(2),
              [theme.breakpoints.up('sm')]:
                                { display: 'none' },
            }}
            onClick={() => { return setMobileOpen((prevOpenMobile) => { return !prevOpenMobile; }); }}
          >
            <Menu />
          </IconButton>
          )}
          {!isMobile && <Search />}
          <IconButton color="inherit" sx={{ ml: 1 }} onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          {isMobile && <Search />}
        </Toolbar>
      </AppBar>

      <Box sx={{
        [theme.breakpoints.up('sm')]: { width: drawerWidth, flexShrink: '0' },
      }}
      >
        {isMobile
          ? (
            <Drawer
              variant="temporary"
              open={mobileOpen}
              onClose={() => { return setMobileOpen((prevMobileOpen) => { return !prevMobileOpen; }); }}
              anchor="left"
              ModalProps={{ keepMounted: true }}
              PaperProps={{ sx: { width: drawerWidth,
                backgroundColor: theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.4)',
                backdropFilter: 'blur(40px)' } }}
            ><Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          )
          : (
            <Drawer
              variant="permanent"
              anchor="left"
              open
              PaperProps={{ sx: { width: drawerWidth } }}
            ><Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          )}
      </Box>

    </>
  );
};

export default Navbar;
