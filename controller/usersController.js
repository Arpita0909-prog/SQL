
const db = require('../utils/db-connection');

const addUsers = (req, res) => {
  const { name, email } = req.body;
  const insertQuery = 'INSERT INTO users (name, email) VALUES (?, ?)';
  db.execute(insertQuery, [name, email], (err, result) => {
    if (err) {
      console.error('Error adding user:', err);
      return res.status(500).send('Error adding user');
    }
    if (result.affectedRows === 0) {
      return res.status(400).send('User not added');
    }
    res.status(201).send('User added successfully');
  });
};

const updateUsers = (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    const updateQuery = 'UPDATE users SET name = ?, email = ? WHERE id = ?';

    db.execute(updateQuery, [name, email, id], (err, result) => {
        if (err) {
            console.error('Error updating user:', err);
            return res.status(500).send('Error updating user');
        }
        if (result.affectedRows === 0) {
            return res.status(404).send('User not found');
        }
        res.status(200).send('User updated successfully');
    });
}
const deleteUsers = (req, res) => {
    const { id } = req.params;
    const deleteQuery = 'DELETE FROM users WHERE id = ?';   
    db.execute(deleteQuery, [id], (err, result) => {
        if (err) {
            console.error('Error deleting user:', err);
            return res.status(500).send('Error deleting user');
        }
        if (result.affectedRows === 0) {
            return res.status(404).send('User not found');
        }   
        res.status(200).send('User deleted successfully');
    });
};

module.exports = {
  addUsers,
    updateUsers,
    deleteUsers
};