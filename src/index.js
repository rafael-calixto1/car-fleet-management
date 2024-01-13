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





// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});