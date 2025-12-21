const db = require('../utils/db-connection');
const users = require('../models/users');

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
    res.json(buses);
  }
  catch (error) {
    res.status(500).json({ error: 'Failed to retrieve buses' });
  } 
};

const getBusesAvailable = async (req, res) => {   
  try {
    const buses =  await db.models.Bus.findAll({ where: { available: true } });
    res.json(buses);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve available buses' });
  } 
};



module.exports = {
  addBuses,
  updateBuses,
  getBuses,
  getBusesAvailable
};