import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import Albums from './components/Albums/Albums';
import Navbar from './components/Navbar/Navbar';
import Artists from './components/Artists/Artists';
import TopCharts from './components/TopCharts/TopCharts';
import './App.css';

// use react-router-dom 5 or 6?
// router-dom 5 uses switch while 6 uses routes

function App() {
    return (
        <BrowserRouter>
            <div style={{ display: 'flex', height: '100%' }}>
                <CssBaseline />
                <Navbar />
                <main
                    style={{
                        flexGrow: '1',
                        padding: '2em',
                        marginTop: '60px',
                        width: '100%',

                    }}>
                    <div style={{ height: '70px' }}>
                        <Routes>
                            <Route exact path="/" element={<Home />} />
                            <Route exact path="/Albums/:id" element={<Albums />} />
                            <Route exact path="/Artists/:id" element={<Artists />} />
                            <Route exact path="/Topcharts" element={<TopCharts />} />
                            <Route exact path='*' element={<h1>PAGE NOT FOUND 404</h1>} />
                        </Routes>
                    </div>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;

