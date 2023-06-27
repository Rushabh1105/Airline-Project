const express = require('express');

const CityController = require('../../controllers/city-controller');
const FlightCOntroller = require('../../controllers/flight-controller');

const router = express.Router();

router.post('/city', CityController.create);
router.delete('/city/:id', CityController.destroy);
router.patch('/city/:id', CityController.update);
router.get('/city/:id', CityController.get);
router.get('/city', CityController.getAll);

router.post('/flights', FlightCOntroller.create);
router.get('/flights', FlightCOntroller.getAll);

module.exports = router