import React, { Component } from 'react';
import axios from 'axios';

class DriverForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      licenseNumber: '',
      message: '',
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { name, licenseNumber } = this.state;

    // Make a POST request to add a new driver
    axios.post('http://localhost:3000/drivers', { name, licenseNumber })
      .then(response => {
        this.setState({ message: response.data });
      })
      .catch(error => {
        console.error('Error adding driver:', error);
        this.setState({ message: 'Failed to add driver. Please try again.' });
      });
  };

  render() {
    const { name, licenseNumber, message } = this.state;

    return (
      <div>
        <h2>Add Driver</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={name} onChange={this.handleChange} required />
          </label>
          <br />
          <label>
            License Number:
            <input type="text" name="licenseNumber" value={licenseNumber} onChange={this.handleChange} required />
          </label>
          <br />
          <button type="submit">Add Driver</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    );
  }
}

export default DriverForm;
