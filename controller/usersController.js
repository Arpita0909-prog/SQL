const db = require('../utils/db-connection');
const user = require('../models/users');
const bookings = require('../models/bookings')
const Bus= require('../models/buses');
const { Op } = require('sequelize');

const addUsers = async (req, res) => {
  try {
    const { name, email } = req.body;   
    const newUser = await db.models.User.create({ name, email });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add user' });
  }
};


const updateUsers = async (req, res) => { 
  try {
    const { id } = req.params;
    const { name, email } = req.body;
    const user = await db.models.User.findByPk(id);
    if (user) {
      await user.update({ name, email });
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update user' });
  }
};

const deleteUsers = async (req, res) => { 
  try {
    const { id } = req.params;
    const user = await db.models.User.findByPk(id);
    if (user) {
      await user.destroy();
      res.json({ message: 'User deleted successfully' });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete user' });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await db.models.User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve users' });
  }
};
 const getUserBookings = async (req, res) => {
  try {
    const users = await db.models.User.findByPk(req.params.id, {
      include: {
        model: bookings,
        include: Bus
      }
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
module.exports = {
  addUsers,
    updateUsers,
    deleteUsers,
    getUsers,
    getUserBookings
};