const db = require('../utils/db-connection');

const addBuses = (req, res) => {
  const { busNumber, totalSeats, availableSeats } = req.body;

  if(busNumber==undefined || totalSeats==undefined || availableSeats==undefined){
    return  res.status(400).send('busNumber, totalSeats and availableSeats are required');
  }

    const insertQuery = 'INSERT INTO buses (busNumber, totalSeats, availableSeats) VALUES (?, ?, ?)';   
    db.execute(insertQuery, [busNumber, totalSeats, availableSeats], (err, result) => {
    if (err) {
      console.error('Error adding bus:', err);
      return res.status(500).send('Error adding bus');
    }

    if (result.affectedRows === 0) {
      return res.status(400).send('Bus not added');
    }
    
    res.status(201).send('Bus added successfully');
  });
}
const updateBuses = (req, res) => {
    const { id } = req.params;
    const { busNumber, totalSeats, availableSeats } = req.body;
    const updateQuery = 'UPDATE buses SET busNumber = ?, totalSeats = ?, availableSeats = ? WHERE id = ?';  
    db.execute(updateQuery, [busNumber, totalSeats, availableSeats, id], (err, result) => {
        if (err) {
            console.error('Error updating bus:', err);
            return res.status(500).send('Error updating bus');
        }
        if (result.affectedRows === 0) {
            return res.status(404).send('Bus not found');
        }
        res.status(200).send('Bus updated successfully');
    });
}
getBuses = (req, res) => {
    const selectQuery = 'SELECT * FROM buses';  
    db.execute(selectQuery, (err, results) => {
        if (err) {
            console.error('Error fetching buses:', err);
            return res.status(500).send('Error fetching buses');
        } 
        res.status(200).json(results);
    }); 
};
getBusesAvailable = (req, res) => {
    const selectQuery = 'SELECT * FROM buses WHERE availableSeats > 10';
    db.execute(selectQuery, (err, results) => {
        if (err) {
            console.error('Error fetching buses:', err);
            return res.status(500).send('Error fetching buses');
        }
        res.status(200).json(results);
    });
};

module.exports = {
  addBuses,
  updateBuses,
  getBuses,
  getBusesAvailable
};