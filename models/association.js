const users = require('./users');
const buses = require('./buses');
const bookings = require('./bookings');


//Link Users & Bookings (One-to-Many)
users.hasMany(bookings);
bookings.belongsTo(users);


//Link Buses & Bookings (One-to-Many)
buses.hasMany(bookings);
bookings.belongsTo(buses);


module.exports = {
  users,
  bookings,
  buses
};