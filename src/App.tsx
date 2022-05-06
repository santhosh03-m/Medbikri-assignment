import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LaunchPadPage from './pages/launchPad';
import LaunchPage from './pages/Launch';
import { Box, Icon, Image, Text, VStack } from '@chakra-ui/react';
function App() {
  return (
    <Box pt={5} minH={'100vh'} bgGradient={"linear(to right, #d3cce3, #e9e4f0)"}>
      
        <Text  bgGradient="linear(to right, #0f2027, #203a43, #2c5364)"
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
