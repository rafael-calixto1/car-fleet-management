import React from 'react';
import CarsList from './Cars/CarList';
import DriversList from './Drivers/DriversList';
import DriverForm from './Drivers/DriverForm';
import CarForm from './Cars/CarForm';
import CarMaintenanceForm from './Maintenance/CarMaintenanceForm';
import CarMaintenanceList from './Maintenance/MaintenanceList';
import FuelingForm from './Fuel/FuelingForm';
import FuelingHistory from './Fuel/FuelingHistory';

function App() {   
  return (
    <div>
      <h1>Your Fleet Management App</h1>
      <CarsList />
      <DriversList/>
      <CarMaintenanceList/>
      <FuelingHistory/>
      <DriverForm/>
      <CarForm/>
      <CarMaintenanceForm/>
      <FuelingForm/>
    </div>
  );
}

export default App;
