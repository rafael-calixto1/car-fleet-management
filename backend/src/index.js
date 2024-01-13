const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// MySQL Database Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'student',
  password: 'student',
  database: 'gerenciamento_de_frotas',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database: ', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

//----------- Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//------------============== Routes ==========================///////



// -----=========CARS


//CREATE A NEW CAR
app.post('/cars', (req, res) => {
  const { make, model, driver } = req.body;

  db.query('INSERT INTO cars (make, model, driver) VALUES (?, ?, ?)', [make, model, driver], (err, result) => {
    if (err) {
      console.error('Error adding car: ', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(201).send('Car added successfully');
    }
  });
});

//GET ALL CARS
app.get('/cars', (req, res) => {
  db.query('SELECT * FROM cars', (err, result) => {
    if (err) {
      console.error('Error fetching cars: ', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).json(result);
    }
  });
});


//GET A CAR BY ID
router.get('/cars/:id', (req, res) => {
  const carId = req.params.id;

  db.query('SELECT * FROM cars WHERE id = ?', [carId], (err, results) => {
    if (err) {
      console.error('Error retrieving car: ', err);
      res.status(500).send('Internal Server Error');
    } else {
      if (results.length > 0) {
        res.status(200).json(results[0]);
      } else {
        res.status(404).send('Car not found');
      }
    }
  });
});



// UPDATE CAR BY ID
app.put('/cars/:id', (req, res) => {
  const carId = req.params.id;
  const { make, model, driver } = req.body;

  db.query('UPDATE cars SET make = ?, model = ?, driver = ? WHERE id = ?', [make, model, driver, carId], (err, result) => {
    if (err) {
      console.error('Error updating car: ', err);
      res.status(500).send('Internal Server Error');
    } else {
      if (result.affectedRows === 0) {
        res.status(404).send('Car not found');
      } else {
        res.status(200).send('Car updated successfully');
      }
    }
  });
});

//DELETE A CAR BY ID
app.delete('/cars/:id', (req, res) => {
  const carId = req.params.id;

  db.query('DELETE FROM cars WHERE id = ?', [carId], (err, result) => {
    if (err) {
      console.error('Error deleting car: ', err);
      res.status(500).send('Internal Server Error');
    } else {
      if (result.affectedRows > 0) {
        res.status(200).send('Car deleted successfully');
      } else {
        res.status(404).send('Car not found');
      }
    }
  });
});


// -----========= FUEL

app.post('/fueling', (req, res) => {
  const { carId, fuelAmount, fuelDate } = req.body;

  db.query('INSERT INTO fueling_history (car_id, fuel_amount, fuel_date) VALUES (?, ?, ?)', [carId, fuelAmount, fuelDate], (err, result) => {
    if (err) {
      console.error('Error adding fueling history: ', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(201).send('Fueling history added successfully');
    }
  });
});

// GET all fueling history for a specific car
app.get('/fueling/:carId', (req, res) => {
  const carId = req.params.carId;

  db.query('SELECT * FROM fueling_history WHERE car_id = ?', [carId], (err, results) => {
    if (err) {
      console.error('Error retrieving fueling history: ', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).json(results);
    }
  });
});

  // GET a specific fueling entry by ID
  app.get('/fueling-entry/:id', (req, res) => {
    const fuelingId = req.params.id;
  
    db.query('SELECT * FROM fueling_history WHERE id = ?', [fuelingId], (err, results) => {
      if (err) {
        console.error('Error retrieving fueling entry: ', err);
        res.status(500).send('Internal Server Error');
      } else {
        if (results.length > 0) {
          res.status(200).json(results[0]);
        } else {
          res.status(404).send('Fueling entry not found');
        }
      }
    });
  });


   // UPDATE a fueling entry by ID
   app.put('/fueling-entry/:id', (req, res) => {
    const fuelingId = req.params.id;
    const { carId, fuelAmount, fuelDate } = req.body;
  
    db.query('UPDATE fueling_history SET car_id = ?, fuel_amount = ?, fuel_date = ? WHERE id = ?', [carId, fuelAmount, fuelDate, fuelingId], (err, result) => {
      if (err) {
        console.error('Error updating fueling entry: ', err);
        res.status(500).send('Internal Server Error');
      } else {
        if (result.affectedRows > 0) {
          res.status(200).send('Fueling entry updated successfully');
        } else {
          res.status(404).send('Fueling entry not found');
        }
      }
    });
  });
  

    
  // DELETE a fueling entry by ID
  app.delete('/fueling-entry/:id', (req, res) => {
    const fuelingId = req.params.id;
  
    db.query('DELETE FROM fueling_history WHERE id = ?', [fuelingId], (err, result) => {
      if (err) {
        console.error('Error deleting fueling entry: ', err);
        res.status(500).send('Internal Server Error');
      } else {
        if (result.affectedRows > 0) {
          res.status(200).send('Fueling entry deleted successfully');
        } else {
          res.status(404).send('Fueling entry not found');
        }
      }
    });
  });



// -----========= TIRE - CHANGE


app.post('/tire-change', (req, res) => {
  const { carId, tireChangeDate } = req.body;

  db.query('INSERT INTO tire_change_history (car_id, tire_change_date) VALUES (?, ?)', [carId, tireChangeDate], (err, result) => {
    if (err) {
      console.error('Error adding tire change history: ', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(201).send('Tire change history added successfully');
    }
  });
});

// GET all tire change history for a specific car
app.get('/tire-change/:carId', (req, res) => {
  const carId = req.params.carId;

  db.query('SELECT * FROM tire_change_history WHERE car_id = ?', [carId], (err, results) => {
    if (err) {
      console.error('Error retrieving tire change history: ', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).json(results);
    }
  });
});



  // GET a specific tire change entry by ID
  app.get('/tire-change-entry/:id', (req, res) => {
    const tireChangeId = req.params.id;
  
    db.query('SELECT * FROM tire_change_history WHERE id = ?', [tireChangeId], (err, results) => {
      if (err) {
        console.error('Error retrieving tire change entry: ', err);
        res.status(500).send('Internal Server Error');
      } else {
        if (results.length > 0) {
          res.status(200).json(results[0]);
        } else {
          res.status(404).send('Tire change entry not found');
        }
      }
    });
  });
  

    
  // UPDATE a tire change entry by ID
  app.put('/tire-change-entry/:id', (req, res) => {
    const tireChangeId = req.params.id;
    const { carId, tireChangeDate } = req.body;
  
    db.query('UPDATE tire_change_history SET car_id = ?, tire_change_date = ? WHERE id = ?', [carId, tireChangeDate, tireChangeId], (err, result) => {
      if (err) {
        console.error('Error updating tire change entry: ', err);
        res.status(500).send('Internal Server Error');
      } else {
        if (result.affectedRows > 0) {
          res.status(200).send('Tire change entry updated successfully');
        } else {
          res.status(404).send('Tire change entry not found');
        }
      }
    });
  });

    
  // DELETE a tire change entry by ID
  app.delete('/tire-change-entry/:id', (req, res) => {
    const tireChangeId = req.params.id;
  
    db.query('DELETE FROM tire_change_history WHERE id = ?', [tireChangeId], (err, result) => {
      if (err) {
        console.error('Error deleting tire change entry: ', err);
        res.status(500).send('Internal Server Error');
      } else {
        if (result.affectedRows > 0) {
          res.status(200).send('Tire change entry deleted successfully');
        } else {
          res.status(404).send('Tire change entry not found');
        }
      }
    });
  });

  

  // -----========= DRIVERS


  app.post('/drivers', (req, res) => {
    const { name, licenseNumber } = req.body;
  
    db.query('INSERT INTO drivers (name, license_number) VALUES (?, ?)', [name, licenseNumber], (err, result) => {
      if (err) {
        console.error('Error adding driver: ', err);
        res.status(500).send('Internal Server Error');
      } else {
        res.status(201).send('Driver added successfully');
      }
    });
  });
  
  
// GET all drivers
app.get('/drivers', (req, res) => {
  db.query('SELECT * FROM drivers', (err, results) => {
    if (err) {
      console.error('Error retrieving drivers: ', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).json(results);
    }
  });
});


// GET a specific driver by ID
app.get('/drivers/:id', (req, res) => {
  const driverId = req.params.id;

  db.query('SELECT * FROM drivers WHERE id = ?', [driverId], (err, results) => {
    if (err) {
      console.error('Error retrieving driver: ', err);
      res.status(500).send('Internal Server Error');
    } else {
      if (results.length > 0) {
        res.status(200).json(results[0]);
      } else {
        res.status(404).send('Driver not found');
      }
    }
  });
});


// UPDATE a driver by ID
app.put('/drivers/:id', (req, res) => {
  const driverId = req.params.id;
  const { name, licenseNumber } = req.body;

  db.query('UPDATE drivers SET name = ?, license_number = ? WHERE id = ?', [name, licenseNumber, driverId], (err, result) => {
    if (err) {
      console.error('Error updating driver: ', err);
      res.status(500).send('Internal Server Error');
    } else {
      if (result.affectedRows > 0) {
        res.status(200).send('Driver updated successfully');
      } else {
        res.status(404).send('Driver not found');
      }
    }
  });
});

  // DELETE a driver by ID
app.delete('/drivers/:id', (req, res) => {
  const driverId = req.params.id;

  db.query('DELETE FROM drivers WHERE id = ?', [driverId], (err, result) => {
    if (err) {
      console.error('Error deleting driver: ', err);
      res.status(500).send('Internal Server Error');
    } else {
      if (result.affectedRows > 0) {
        res.status(200).send('Driver deleted successfully');
      } else {
        res.status(404).send('Driver not found');
      }
    }
  });
});




// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});