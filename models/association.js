const users = require('./users');
const bookings = require('./bookings');

users.hasMany(bookings);
bookings.belongsTo(users);

module.exports = {
  users,
  bookings
};