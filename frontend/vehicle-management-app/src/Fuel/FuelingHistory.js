import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FuelingHistory = () => {
  const [fuelingHistory, setFuelingHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFuelingHistory = async () => {
      try {
        const response = await axios.get('http://localhost:3000/fueling');
        setFuelingHistory(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching fueling history: ', error);
      }
    };

    fetchFuelingHistory();
  }, []);

  return (
    <div>
      <h2>Fueling History for All Cars</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {fuelingHistory.map((entry) => (
            <li key={entry.id}>
              Car ID: {entry.car_id}, Fuel Amount: {entry.fuel_amount}, Fuel Date: {entry.fuel_date}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FuelingHistory;
