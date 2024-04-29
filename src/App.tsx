import React from 'react';
import './App.css';
import Home from "./pages/Home/Home"
import Skills from "./pages/Skills/Skills";
import NavBar from './components/NavBar/NavBar';
import Projects from './pages/Project/Projects'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/github-page/' element={<Home/>}/>
        <Route path='/github-page/Home' element={<Home/>}/>
        <Route path='/github-page/Skills' element={<Skills/>}/>
        <Route path='/github-page/Projects' element={<Projects/>}/>
        <Route path='/github-page/About' element={<Home/>}/>


      </Routes>
    </Router>
  );
}

export default App;
