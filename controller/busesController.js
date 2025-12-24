const db = require('../utils/db-connection');
const User = require('../models/users');
const { Op } = require('sequelize');
const Bus = require('../models/buses');

const addBuses = async (req, res) => {
  try {
    const { busNumber, totalSeats, availableSeats } = req.body;
    const newBus = await db.models.Bus.create({ busNumber, totalSeats, availableSeats });
    res.status(201).json(newBus);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add bus' });
  }
};

const updateBuses = async (req, res) => {
  try {
    const { id } = req.params;
    const { busNumber, totalSeats, availableSeats } = req.body;
    const bus = await db.models.Bus.findByPk(id); 
    if (bus) {
      await bus.update({ busNumber, totalSeats, availableSeats });
      res.json(bus);
    } else {
      res.status(404).json({ error: 'Bus not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update bus' });
  }
};

const getBuses = async (req, res) => {
  try {
    const buses = await db.models.Bus.findAll();
    res.status(200).json(buses);
  }
  catch (error) {
    res.status(500).json({ error: 'Failed to retrieve buses' });
  } 
};

const getBusesAvailable = async (req, res) => {   
  try {
    const buses =  await db.models.Bus.findAll({ where: { availableSeats: { [Op.gt]: 10 } } });
    res.status(200).json(buses);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve available buses' });
  } 
};
getBusBookings = async (req, res) => {
  try {
    const bus = await Bus.findByPk(req.params.id, {
      include: {
        model: Booking,
        include: User
      }
    });
    if (!bus) {
      return res.status(404).json({ message: 'Bus not found' });
    }

    res.json(bus);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



module.exports = {
  addBuses,
  updateBuses,
  getBuses,
  getBusesAvailable,
  getBusBookings
};