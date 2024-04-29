import React from 'react';
import './App.css';
import Home from "./pages/Home/Home"
import Skills from "./pages/Skills/Skills";
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/github-page/' element={<Home/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Skills' element={<Skills/>}/>
        <Route path='/Projects' element={<Skills/>}/>
        <Route path='/About' element={<Home/>}/>


      </Routes>
    </Router>
  );
}

export default App;
