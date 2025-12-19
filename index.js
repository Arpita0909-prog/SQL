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
});

    function createTable(query,tableName){
        connection.query(query, (err, results) => {
          if (err) {
            console.error('Error creating table:', err);
            return;
          }
            console.log('Table created successfully.');
        });
    }
    const createUserTable = `create table users(id INT PRIMARY KEY AUTO_INCREMENT, name VARCHAR(50), email VARCHAR(50));`;
    const createBusTable = `create table buses(id INT PRIMARY KEY AUTO_INCREMENT, busNumber VARCHAR(20), totalSeats INT, availableSeats INT);`;
    const createBookingTable = `create table bookings(id INT PRIMARY KEY AUTO_INCREMENT, seatNumber INT);`;
    const createPaymentTable = `create table payments(id INT PRIMARY KEY AUTO_INCREMENT, amountPaid DECIMAL(10,2), paymentStatus VARCHAR(20));`;

    createTable(createUserTable,'users');
    createTable(createBusTable,'buses');
    createTable(createBookingTable,'bookings');
    createTable(createPaymentTable,'payments');
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