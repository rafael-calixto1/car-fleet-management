import React from 'react';

import './App.css';
import { Navbar } from './layouts/NavAndFooter/NavBar';
import DriverList from './layouts/Drivers/DriverList';
import DriverForm from './layouts/Drivers/DriverForm';




function App() {
  return (
    <div className="App">

        <Navbar/>
        <DriverList/>
        <DriverForm/>
    </div>
  );
}

export default App;
