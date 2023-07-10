// import React from 'react';
// import {
//   ChakraProvider,
//   Box,
//   Text,
//   Link,
//   VStack,
//   Code,
//   Grid,
//   theme,
// } from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { Header } from './components/header';
import { Home } from './components/home';
import { Footer } from './components/footer';
import { Videos } from './components/videos';
import { Upload } from './components/upload';
import { Login } from './components/login';
import { Register } from './components/register';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route  path={"/"} element={<Home/>}/>
        <Route  path={"/videos"} element={<Videos/>}/>
        <Route  path={"/upload"} element={<Upload/>}/>
        <Route  path={"/login"} element={<Login/>}/>
        <Route  path={"/register"} element={<Register/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
