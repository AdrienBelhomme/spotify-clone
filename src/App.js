import { CssBaseline, useMediaQuery } from '@mui/material';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import useStyles from './styles';

import { Navbar, Home, Albums, Artists, TopCharts, Player } from './components';
import MusicByCountry from './components/MusicByCountry';
import './App.css';

const App = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width:600px)');
  return (
    <BrowserRouter>
      <div style={{ position: 'relative', display: 'flex', height: '100vh', zIndex: 1 }}>
        <CssBaseline />
        <Navbar />
        <main style={{ flexGrow: '1', padding: '2em', marginTop: '60px', width: '100%' }}>
          <div style={{ height: '70px' }}>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/albums/:id" element={<Albums />} />
              <Route exact path="/artists/:id" element={<Artists />} />
              <Route exact path="/topcharts" element={<TopCharts />} />
              <Route exact path="/country" element={<MusicByCountry />} />
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

