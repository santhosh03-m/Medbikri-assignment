import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LaunchPadPage from './pages/launchPad';
import LaunchPage from './pages/Launch';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LaunchPadPage />}/>
        <Route path='/launch/:id' element={<LaunchPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
