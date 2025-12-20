const express = require('express');
const busController = require('../controller/busesController');
const router = express.Router();

router.post("/add", busController.addBuses);
router.put("/update/:id", busController.updateBuses);
router.get("/all", busController.getBuses);
router.get("/available", busController.getBusesAvailable);








module.exports = router;