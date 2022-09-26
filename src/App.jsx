import React from 'react';
import { CssBaseline, useMediaQuery } from '@mui/material';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import { Home, Albums, Navbar, Artists, TopCharts, Player } from './components';
import './App.css';

const App = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  return (
    <BrowserRouter>
      <div style={{ position: 'relative', display: 'flex', height: '100vh' }}>
        <CssBaseline />
        <Navbar />
        <main style={{ flexGrow: '1', padding: '2em', marginTop: '60px', width: '100%' }}>
          <div style={{ height: '70px' }}>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/Albums/:id" element={<Albums />} />
              <Route exact path="/Artists/:id" element={<Artists />} />
              <Route exact path="/Topcharts" element={<TopCharts />} />
              <Route exact path="*" element={<h1>PAGE NOT FOUND 404</h1>} />
            </Routes>
          </div>
          {isMobile ? (
            <div style={{ position: 'absolute', right: '0px', bottom: '0px', width: '100%' }}>
              <Player />
            </div>
          ) : (
            <div style={{ position: 'absolute', right: '0px', bottom: '0px' }}>
              <Player />
            </div>
          ) }
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;

