import React, { useContext, useState } from 'react';
import { AppBar, Toolbar, Box, Drawer, useMediaQuery, IconButton } from '@mui/material';
import { Menu, DarkMode, LightMode } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

import Sidebar from './Sidebar';
import Search from './Search';
import { ColorModeContext } from './utils/ToggleColorMode';
// import { Sidebar, Search } from '.';

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
        style={{ display: 'flex', boxShadow: theme.palette.mode === 'dark' ? '10px 0px 30px #bf0bcc' : '10px 0px 30px rgba(0,0,0,0.6)' }}
        sx={{ backgroundColor:
    theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.6)' : 'white',
        backdropFilter: 'blur(40px)' }}
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
            style={{ outline: 'none', color: 'black' }}
            sx={{
              marginRight: theme.spacing(2),
              [theme.breakpoints.up('sm')]:
                                { display: 'none' },
            }}
            onClick={() => setMobileOpen((prevOpenMobile) => !prevOpenMobile)}
          >
            <Menu style={{ color: theme.palette.mode === 'light' ? 'black' : '#bf0bcc' }} />
          </IconButton>
          )}
          {!isMobile && <Search />}
          <IconButton color="inherit" sx={{ ml: 1 }} style={{ fontSize: 'large' }} onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === 'dark' ? <DarkMode style={{ color: '#bf0bcc' }} /> : <LightMode style={{ color: 'black' }} />}
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
              onClose={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
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
