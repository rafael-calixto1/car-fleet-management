import React, { useState, useEffect } from 'react';

const CarMaintenanceList = () => {
  const [maintenanceEntries, setMaintenanceEntries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/car-maintenance');
        if (!response.ok) {
          throw new Error('Failed to fetch car maintenance entries');
        }
        const data = await response.json();
        setMaintenanceEntries(data);
      } catch (error) {
        console.error('Error fetching car maintenance entries: ', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div>
      <h2>Car Maintenance Entries</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {maintenanceEntries.map((entry) => (
            <li key={entry.id}>
              <p>ID: {entry.id}</p>
              <p>Car ID: {entry.car_id}</p>
              <p>Maintenance Type: {entry.maintenance_type}</p>
              <p>Maintenance Date: {entry.maintenance_date}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CarMaintenanceList;
