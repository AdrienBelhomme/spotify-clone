import { CssBaseline, useMediaQuery } from '@mui/material';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import { Home, Albums, Navbar, Artists, TopCharts, Player, SongDetails } from './components';
import MusicByCountry from './components/MusicByCountry';
import './App.css';

const App = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  return (
    <BrowserRouter>
      <div style={{ display: 'flex', height: '100%', width: 'calc(100% - 200px)' }}>
        <CssBaseline />
        <Navbar />
        <main style={{ flexGrow: '1', padding: '2em', marginTop: '60px', width: '100%' }}>
          <div style={{ height: '70px' }}>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/albums" element={<Albums />} />
              <Route exact path="/artists/:id" element={<Artists />} />
              <Route exact path="/topcharts" element={<TopCharts />} />
              <Route exact path="/country" element={<MusicByCountry />} />
              <Route exact path="/songdetails/:trackId" element={<SongDetails />} />
              <Route exact path="*" element={<h1>PAGE NOT FOUND 404</h1>} />
            </Routes>
          </div>
        </main>
      </div>
      {isMobile ? (
        <div style={{ position: 'fixed', bottom: '0px', width: '100%', left: '0px', right: '0px', padding: '5px' }}>
          <Player />
        </div>
      ) : (
        <div style={{ position: 'fixed', right: '0px', bottom: '0px', width: '100%', left: '0px', zIndex: 2 }}>
          <Player />
        </div>
      ) }
    </BrowserRouter>
  );
};

export default App;

