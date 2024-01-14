import React from 'react';
<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';
=======
import './App.css';
import { Navbar } from './layouts/NavAndFooter/NavBar';
import DriverList from './layouts/Drivers/DriverList';
>>>>>>> frontend

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
=======
        <Navbar/>
        <DriverList/>
>>>>>>> frontend
    </div>
  );
}

export default App;
