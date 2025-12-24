const User= require('../models/users');
const Bus = require('../models/buses');

exports.createBooking = async (req, res) => {
  try {
    const { userId, busId, date, status,seatNumber } = req.body;

    // 1️⃣ Validate User
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // 2️⃣ Validate Bus
    const bus = await Bus.findByPk(busId);
    if (!bus) {
      return res.status(404).json({ message: 'Bus not found' });
    }

    // 3️⃣ Create booking using association
    const booking = await user.createBooking({
      date,
      status,
      BusId: bus.id,
      seatNumber
    });

    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


