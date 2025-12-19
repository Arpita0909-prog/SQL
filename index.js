const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3001; 
const db = require('./utils/db-connection');
const usersRoutes = require('./routes/usersRoutes');


app.use(express.json());
app.use('/users', usersRoutes);

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