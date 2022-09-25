import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import { Home, Albums, Navbar, Artists } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Albums/:id" element={<Albums />} />
        <Route path="/Artists/:id" element={<Artists />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

