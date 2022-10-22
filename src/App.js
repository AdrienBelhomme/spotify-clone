import { CssBaseline, useMediaQuery } from '@mui/material';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Navbar, Home, Albums, Artists, Player, MusicByCountry, SongDetails } from './components';
import './App.css';

const App = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const { setActiveSong } = useSelector((state) => state.playerSlice);
  return (
    <BrowserRouter>
      <div style={{ postion: 'relative', display: 'flex', height: '100%', width: 'calc(100% - 200px)', zIndex: 1 }}>
        <CssBaseline />
        <Navbar />
        <main style={{ flexGrow: '1', padding: '2em', marginTop: '60px', width: '100%' }}>
          <div style={{ height: '70px' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/albums" element={<Albums />} />
              <Route path="/artists/:artistId" element={<Artists />} />
              <Route path="/country" element={<MusicByCountry />} />
              <Route path="/songdetails/:trackId" element={<SongDetails />} />
              <Route path="*" element={<h1>PAGE NOT FOUND 404</h1>} />
            </Routes>
          </div>
        </main>
      </div>
      {!setActiveSong?.title && (
        <div style={{ position: 'fixed',
          bottom: '0px',
          width: '100%',
          left: '0px',
          right: '0px',
          padding: isMobile ? '5px' : 0,
          zIndex: 5000 }}
        >

          <Player />

        </div>
      )}
    </BrowserRouter>
  );
};

export default App;

