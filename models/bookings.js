const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../utils/db-connection');

const Booking = sequelize.define('Booking', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }, 
    busId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
    seatNumber: {
    type: DataTypes.STRING,
    allowNull: false
  },
    bookingDate: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW
  }
});
module.exports = Booking;