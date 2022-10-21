import { CssBaseline, useMediaQuery } from '@mui/material';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Navbar, Home, Albums, Artists, Player, MusicByCountry } from './components';
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
              <Route exact path="/" element={<Home />} />
              <Route exact path="/albums/:id" element={<Albums />} />
              <Route exact path="/artists/:id" element={<Artists />} />
              <Route exact path="/country" element={<MusicByCountry />} />
              <Route exact path="*" element={<h1>PAGE NOT FOUND 404</h1>} />
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

