import React, { useState, useEffect } from 'react';
import DriverModel from '../../models/DriverModel';
import { SpinnerLoading } from '../Utils/SpinnerLoading';

const DriverList = () => {
  const [drivers, setDrivers] = useState<DriverModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDrivers = async () => {
      const baseUrl: string = 'http://localhost:3001/drivers';

      try {
        const response = await fetch(baseUrl);

        if (!response.ok) {
          throw new Error('Something went wrong!');
        }

        const responseData = await response.json();

        const loadedDrivers: DriverModel[] = [];

        for (const key in responseData) {
          loadedDrivers.push({
            id: responseData[key].id,
            name: responseData[key].name,
            licenseNumber: responseData[key].license_number,
          });
        }

        setDrivers(loadedDrivers);
      } catch (error: any) {
        setHttpError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDrivers();
  }, []);

  if (isLoading) {
    return (
      <div>
        <SpinnerLoading/>
      </div>
    );
  }

  if (httpError) {
    return (
      <div className="container m-5">
        <p>{httpError}</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Driver List</h2>
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>License Number</th>
          </tr>
        </thead>
        <tbody>
          {drivers.map((driver) => (
            <tr key={driver.id}>
              <td>{driver.id}</td>
              <td>{driver.name}</td>
              <td>{driver.licenseNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DriverList;