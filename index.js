const express = require('express');
const app = express();
const port = 3001; 
const db = require('./utils/db-connection');
const usersRoutes = require('./routes/usersRoutes');
const busesRoutes = require('./routes/busesRoutes');
const usermodel = require('./models/users');
const busmodel =  require('./models/buses');  
const bookingmodel = require('./models/bookings');
require('./models/association');

app.use(express.json());
app.use('/users', usersRoutes);
app.use('/buses', busesRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});
db.sync({force: true}).then(() => {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  }); 
}).catch((error) => {
  console.error('Unable to sync database:', error);
});