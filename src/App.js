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
          {/* <h2>About</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          quas sint et nihil iusto eius nostrum sit error, repellat optio
          quisquam! Magnam dolore iusto cumque. Nostrum error iste neque
          maiores.
        </p>
        <h2>Skills</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis in
          maiores autem quidem obcaecati excepturi! Cupiditate eaque itaque
          magni voluptatibus neque nobis est dolor? Atque sunt minus ipsa
          asperiores. At.
        </p>
        <h2>Projects</h2>
        <a href='#'>Project 1</a>
        <a href='#'>Project 2</a>
        <a href='#'>Project 3</a>
        <a href='#'>Project 4</a>
        <a href='#'>Project 5</a>
        <h2>Contact</h2>
        <p>myEmail@email.com</p> */}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
