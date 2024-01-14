import React, { useState } from 'react';
import axios from 'axios';

const CarMaintenanceForm = () => {
  const [carId, setCarId] = useState('');
  const [maintenanceType, setMaintenanceType] = useState('');
  const [maintenanceDate, setMaintenanceDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Combine the date and time into a single string
      const formattedDate = new Date(maintenanceDate).toISOString();

      const response = await axios.post('http://localhost:3000/car-maintenance', {
        carId,
        maintenanceType,
        maintenanceDate: formattedDate,
      });

      console.log(response.data); // Log the server response

      // Optionally, you can reset the form fields or provide feedback to the user
      setCarId('');
      setMaintenanceType('');
      setMaintenanceDate('');
    } catch (error) {
      console.error('Error submitting car maintenance entry: ', error);
      // Handle error and provide feedback to the user
    }
  };

  return (
    <div>
      <h2>Add Car Maintenance Entry</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Car ID:
          <input type="text" value={carId} onChange={(e) => setCarId(e.target.value)} />
        </label>
        <br />
        <label>
          Maintenance Type:
          <input type="text" value={maintenanceType} onChange={(e) => setMaintenanceType(e.target.value)} />
        </label>
        <br />
        <label>
          Maintenance Date:
          <input type="datetime-local" value={maintenanceDate} onChange={(e) => setMaintenanceDate(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CarMaintenanceForm;
