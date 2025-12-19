const mysql = require('mysql2');

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
    const createUserTable = `create table if not exists users(id INT PRIMARY KEY AUTO_INCREMENT, name VARCHAR(50), email VARCHAR(50));`;
    const createBusTable = `create table if not exists buses(id INT PRIMARY KEY AUTO_INCREMENT, busNumber VARCHAR(20), totalSeats INT, availableSeats INT);`;
    const createBookingTable = `create table if not exists bookings(id INT PRIMARY KEY AUTO_INCREMENT, seatNumber INT);`;
    const createPaymentTable = `create table if not exists payments(id INT PRIMARY KEY AUTO_INCREMENT, amountPaid DECIMAL(10,2), paymentStatus VARCHAR(20));`;

    createTable(createUserTable,'users');
    createTable(createBusTable,'buses');
    createTable(createBookingTable,'bookings');
    createTable(createPaymentTable,'payments');
module.exports = connection;