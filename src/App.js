import React from 'react';
import { Link, BrowserRouter, NavLink } from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';
import './style.css';
import Sidebar from './components/sidebar/Sidebar';
import Routes from './util/routes';

function App() {
  return (
    <div class='grid-2'>
      <BrowserRouter>
        <Sidebar />
        <div class='section-2'>
          <Routes />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
