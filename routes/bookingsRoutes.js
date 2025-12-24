const express = require('express');
const bookingController= require('../controller/bookingsController');
const router = express.Router();

router.post("/add", bookingController.createBooking);

module.exports = router;
