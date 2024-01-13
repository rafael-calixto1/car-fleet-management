import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CarsList = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    // Fetch cars data from the server
    axios.get('http://localhost:3000/cars')
      .then(response => {
        setCars(response.data);
      })
      .catch(error => {
        console.error('Error fetching cars:', error);
      });
  }, []);

  return (
    <div>
      <h2>Cars List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Make</th>
            <th>Model</th>
            <th>Driver</th>
          </tr>
        </thead>
        <tbody>
          {cars.map(car => (
            <tr key={car.id}>
              <td>{car.id}</td>
              <td>{car.make}</td>
              <td>{car.model}</td>
              <td>{car.driver}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CarsList;