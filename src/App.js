import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Actors from './pages/actors';
import Films from './pages/films';
import Countries from './pages/countries';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route exact path='/actors' element={<Actors/>}></Route>
        <Route exact path='/films' element={<Films/>}></Route>
        <Route exact path='/countries' element={<Countries/>}></Route>
      </Routes>
      
    </div>
  );
}
export default App;