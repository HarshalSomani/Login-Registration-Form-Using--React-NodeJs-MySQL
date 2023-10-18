const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;


const pool = mysql.createPool({
  host: 'localhost', 
  user: 'root',
  password: 'root', 
  database: 'myappdb', 
});
app.use(cors());
app.use(bodyParser.json());

app.post('/api/user', (req, res) => {
  const { name, password, email } = req.body;

  // Insert user data into MySQL database
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting MySQL connection: ', err);
      res.status(500).json({ error: 'Error storing data' });
      return;
    }

    const insertQuery = 'INSERT INTO users (name, password, email) VALUES (?, ?, ?)';
    connection.query(insertQuery, [name, password, email], (err, results) => {
      connection.release();

      if (err) {
        console.error('Error inserting data into MySQL: ', err);
        res.status(500).json({ error: 'Error storing data' });
        return;
      }

      console.log('User data stored:', { name, email });
      res.json({ message: 'Data stored successfully' });
    });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
