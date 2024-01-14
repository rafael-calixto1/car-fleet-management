import React from 'react';
import CarsList from './Cars/CarList';
import DriversList from './Drivers/DriversList';
import DriverForm from './Drivers/DriverForm';
import CarForm from './Cars/CarForm';

function App() {   
  return (
    <div>
      <h1>Your Fleet Management App</h1>
      <CarsList />
      <DriversList/>
      <DriverForm/>
      <CarForm/>
    </div>
  );
}

export default App;
