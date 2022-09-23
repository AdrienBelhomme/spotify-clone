import React from 'react'
import { CssBaseline } from '@mui/material';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Home, Albums, Navbar, Artists } from './components'
//use react-router-dom 5 or 6?
//router-dom 5 uses switch while 6 uses routes

const App = () => (
    <BrowserRouter>
        <CssBaseline />
        <Navbar />
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/Albums/:id' element={<Albums />} />
            <Route path='/Artists/:id' element={<Artists />} />
        </Routes>

    </BrowserRouter>

)


export default App

