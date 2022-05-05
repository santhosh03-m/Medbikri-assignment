import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LaunchPadPage from './pages/launchPad';
import LaunchPage from './pages/Launch';
import { Box, Image, Text, VStack } from '@chakra-ui/react';
import rocketGif from './assets/8586-rocket-in-space.gif'
function App() {
  return (
    <Box>
      
        <Text mt={3} bgGradient="linear(to right, #0f2027, #203a43, #2c5364)"
      bgClip="text" fontSize='6xl' fontWeight={'bold'} textAlign={'center'}>SpaceX</Text>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LaunchPadPage />}/>
            <Route path='/launch/:id' element={<LaunchPage />}/>
          </Routes>
        </BrowserRouter>
      </Box>
    
  );
}

export default App;
