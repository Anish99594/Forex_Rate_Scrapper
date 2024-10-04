const express = require('express');
const router = express.Router();
const forexController = require('../controllers/forexController');

// Route to get the average rate
router.get('/average', forexController.getAverageRate);

// Route to get the closing rate
router.get('/closing', forexController.getClosingRate);

module.exports = router;
