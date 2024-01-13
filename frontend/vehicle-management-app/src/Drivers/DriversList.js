import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DriversList = () => {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    // Fetch drivers data from the server
    axios.get('http://localhost:3000/drivers')
      .then(response => {
        setDrivers(response.data);
      })
      .catch(error => {
        console.error('Error fetching drivers:', error);
      });
  }, []);

  return (
    <div>
      <h2>Drivers List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>License Number</th>
          </tr>
        </thead>
        <tbody>
          {drivers.map(driver => (
            <tr key={driver.id}>
              <td>{driver.id}</td>
              <td>{driver.name}</td>
              <td>{driver.license_number}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DriversList;
