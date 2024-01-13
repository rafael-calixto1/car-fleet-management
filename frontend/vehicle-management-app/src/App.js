import React from 'react';
import CarsList from './Cars/CarList';
import DriversList from './Drivers/DriversList';

function App() {
  return (
    <div>
      <h1>Your Fleet Management App</h1>
      <CarsList />
      <DriversList/>
    </div>
  );
}

export default App;
