import React, { Component } from 'react';
import axios from 'axios';

class CarForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      make: '',
      model: '',
      selectedDriver: '', // Track the selected driver ID
      drivers: [], // Store the list of drivers
      message: '',
    };
  }

  componentDidMount() {
    // Fetch the list of drivers when the component mounts
    axios.get('http://localhost:3000/drivers')
      .then(response => {
        this.setState({ drivers: response.data });
      })
      .catch(error => {
        console.error('Error fetching drivers:', error);
      });
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { make, model, selectedDriver } = this.state;

    // Make a POST request to add a new car with the selected driver
    axios.post('http://localhost:3000/cars', { make, model, driver: selectedDriver })
      .then(response => {
        this.setState({ message: response.data });
      })
      .catch(error => {
        console.error('Error adding car:', error);
        this.setState({ message: 'Failed to add car. Please try again.' });
      });
  };

  render() {
    const { make, model, selectedDriver, drivers, message } = this.state;

    return (
      <div>
        <h2>Add Car</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Make:
            <input type="text" name="make" value={make} onChange={this.handleChange} required />
          </label>
          <br />
          <label>
            Model:
            <input type="text" name="model" value={model} onChange={this.handleChange} required />
          </label>
          <br />
          <label>
            Driver:
            <select name="selectedDriver" value={selectedDriver} onChange={this.handleChange} required>
              <option value="" disabled>Select a driver</option>
              {drivers.map(driver => (
                <option key={driver.id} value={driver.id}>
                  {driver.name} - {driver.license_number}
                </option>
              ))}
            </select>
          </label>
          <br />
          <button type="submit">Add Car</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    );
  }
}

export default CarForm;
