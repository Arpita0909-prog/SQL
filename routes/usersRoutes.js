const express = require('express');
const userController = require('../controller/usersController');
const router = express.Router();

router.post("/add", userController.addUsers);
router.put("/update/:id", userController.updateUsers);
router.delete("/delete/:id", userController.deleteUsers);
router.get("/get", userController.getUsers);

module.exports = router;