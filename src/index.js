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



// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});