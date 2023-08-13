// define API routes for travel destinations
// link to controller js file to handle destination 

const express = require('express');
const router = express.Router();
const DestinationController = require('../controllers/travelDestinationController');

router.get('/destinations', DestinationController.getAllDestinations);
router.get('/destinations/:id', DestinationController.getDestinationById);
router.post('/destinations', DestinationController.createDestination);
router.put('/destinations/:id', DestinationController.updateDestination); 
router.delete('/destinations/:id', DestinationController.deleteDestination);
router.get('/search', DestinationController.searchDestinationsByName);

module.exports = router;


