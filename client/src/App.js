import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Actors from './pages/actors';
import Films from './pages/films';

// import the ToDoList component


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route exact path='/actors' element={<Actors/>}></Route>
        <Route exact path='/films' element={<Films/>}></Route>
      </Routes>
      
    </div>
  );
}
export default App;