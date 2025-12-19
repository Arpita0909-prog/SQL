const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000; 
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Arpita@1234',
  database: 'testdb'
});
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
    console.log('Connected to the MySQL database.');
    const creationQuery = `create table students (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    age INT)`;
    connection.query(creationQuery, (err, results) => {
      if (err) {
        console.error('Error creating table:', err);
        return;
      }
        console.log('Table created successfully.');
    });
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, (err) => {
  if (err) {
    console.error('Error starting the server:', err);
    return;
  }
  console.log(`Server is running at http://localhost:${port}`);
});