import React, { useState } from 'react';
import axios from 'axios';

const FuelingForm = () => {
  const [carId, setCarId] = useState('');
  const [fuelAmount, setFuelAmount] = useState('');
  const [fuelDate, setFuelDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/fueling', {
        carId,
        fuelAmount,
        fuelDate,
      });

      console.log(response.data);

      setCarId('');
      setFuelAmount('');
      setFuelDate('');
    } catch (error) {
      console.error('Error submitting fueling history: ', error);
    }
  };

  return (
    <div>
      <h2>Add Fueling History</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Car ID:
          <input type="text" value={carId} onChange={(e) => setCarId(e.target.value)} />
        </label>
        <br />
        <label>
          Fuel Amount:
          <input type="text" value={fuelAmount} onChange={(e) => setFuelAmount(e.target.value)} />
        </label>
        <br />
        <label>
          Fuel Date:
          <input type="date" value={fuelDate} onChange={(e) => setFuelDate(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FuelingForm;
