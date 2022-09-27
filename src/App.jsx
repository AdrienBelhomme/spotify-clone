import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import { Home, Albums, Navbar, Artists, TopCharts } from './components';
import MusicByCountry from './components/MusicByCountry';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex', height: '100%' }}>
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
    </BrowserRouter>
  );
};

export default App;

