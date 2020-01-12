import React from 'react';
import { Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import SideMenu from './components/sideMenu/sideMenu'; 

function App() {
  return (
    <div className="App">
      <SideMenu></SideMenu>
    </div>
  );
}

export default App;
