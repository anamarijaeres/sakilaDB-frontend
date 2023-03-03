import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Actors from './pages/actors';

const Main = () => {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/actors' component={Actors}></Route>
    </Routes>
  );
}

export default Main;