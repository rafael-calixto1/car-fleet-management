import React from 'react';
import './App.css';
import { Navbar } from './layouts/NavAndFooter/NavBar';
import DriverList from './layouts/Drivers/DriverList';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <DriverList/>
    </div>
  );
}

export default App;
