import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FuelingHistory = ({ carId }) => {
  const [fuelingHistory, setFuelingHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFuelingHistory = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/fueling/${carId}`);
        setFuelingHistory(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching fueling history: ', error);
        // Handle error and provide feedback to the user
        setLoading(false);
      }
    };

    fetchFuelingHistory();
  }, [carId]);

  if (loading) {
    return <p>Loading fueling history...</p>;
  }

  return (
    <div>
      <h2>Fueling History for Car {carId}</h2>
      {fuelingHistory.length === 0 ? (
        <p>No fueling history available for this car.</p>
      ) : (
        <ul>
          {fuelingHistory.map((entry) => (
            <li key={entry.id}>
              <p>Fuel Amount: {entry.fuel_amount}</p>
              <p>Fuel Date: {entry.fuel_date}</p>
              {/* Add more details as needed */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FuelingHistory;
