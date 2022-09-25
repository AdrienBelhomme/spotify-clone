import React, { useState } from 'react';
import { AppBar, Toolbar, Box, Drawer, useMediaQuery, IconButton } from '@mui/material';
import { Brightness4, Brightness7, Menu } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import Sidebar from '../Sidebar/Sidebar';
import Search from '../Search/Search';

const drawerWidth = '200px';
function Navbar() {
    const isMobile = useMediaQuery('(max-width:600px)');
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = useState(false);
    return (
        <>
            <AppBar
                position="fixed"
                style={{ background: 'transparent', boxShadow: '0px 7px 7px white' }}
                sx={{ color: theme.palette.secondary.main }}>

                <Toolbar
                    sx={(theme) => ({
                        height: '80px', display: 'flex', justifyContent: 'space-between', marginLeft: '200px',
                        [theme.breakpoints.down("sm")]:
                            { ml: 2, flexWrap: 'wrap' },
                    })}
                >
                    {isMobile && <IconButton
                        color='inherit'
                        edge="start"
                        style={{ outline: 'solid' }}
                        sx={(theme) => ({
                            marginRight: theme.spacing(2),
                            [theme.breakpoints.up('sm')]:
                                { display: 'none' }
                        })}
                        onClick={() => setMobileOpen((prevOpenMobile) => !prevOpenMobile)}
                    >
                        <Menu />
                    </IconButton>}
                    {!isMobile && <Search />}
                    <IconButton color='inherit' sx={{ ml: 1 }} onClick={() => { }}>
                        {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
                    </IconButton>
                    {isMobile && <Search />}
                </Toolbar>
            </AppBar>

            <Box sx={(theme) => ({
                [theme.breakpoints.up('sm')]: { width: drawerWidth, flexShrink: '0' }
            })}>
                {isMobile ?
                    <Drawer
                        variant='temporary'
                        open={mobileOpen}
                        onClose={() => setMobileOpen(prevMobileOpen => !prevMobileOpen)}
                        anchor='right'
                        ModalProps={{ keepMounted: true }}
                        PaperProps={{ sx: { width: drawerWidth } }}
                    ><Sidebar setMobileOpen={setMobileOpen} /></Drawer>
                    : <Drawer
                        variant='permanent'
                        anchor='left'
                        open
                        PaperProps={{ sx: { width: drawerWidth } }}
                    ><Sidebar setMobileOpen={setMobileOpen} /></Drawer>}
            </Box>

        </>
    );
}

export default Navbar;
