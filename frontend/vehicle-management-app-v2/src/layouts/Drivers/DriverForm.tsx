import React, { useState } from 'react';

function DriverForm() {
  const [name, setName] = useState('');
  const [licenseNumber, setLicenseNumber] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!name || !licenseNumber) {
      setAlertMessage('Please fill in all fields');
      return;
    }
    fetch('http://localhost:3001/drivers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, licenseNumber }),
    })
      .then((response) => {
        console.log(response);
        setAlertMessage('Driver added successfully');
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
        setAlertMessage('An error occurred while adding the driver');
      });
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
<form onSubmit={handleSubmit} className="mt-3">
  {alertMessage && <div className="alert alert-danger">{alertMessage}</div>}
  <div className="mb-3">
    <label htmlFor="name" className="form-label">
      Name:
    </label>
    <input
      type="text"
      className="form-control"
      id="name"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  </div>
  <div className="mb-3">
    <label htmlFor="licenseNumber" className="form-label">
      License Number:
    </label>
    <input
      type="text"
      className="form-control"
      id="licenseNumber"
      value={licenseNumber}
      onChange={(e) => setLicenseNumber(e.target.value)}
    />
  </div>
  <div className="mb-3">
    <button type="submit" className="btn btn-primary me-2">
      Submit
    </button>
    <button type="button" className="btn btn-secondary" onClick={handleRefresh}>
      Refresh
    </button>
  </div>
</form>
  );
}

export default DriverForm;
