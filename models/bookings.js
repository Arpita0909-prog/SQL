const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../utils/db-connection');

const Booking = sequelize.define('Booking', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }, 
    seatNumber: {
    type: DataTypes.STRING,
    allowNull: true
  }
   
});
module.exports = Booking;