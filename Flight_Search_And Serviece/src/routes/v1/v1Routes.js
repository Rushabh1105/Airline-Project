const express = require('express');

const { FlightMiddlewares } = require('../../middlewares/index');

const CityController = require('../../controllers/city-controller');
const FlightCOntroller = require('../../controllers/flight-controller');
const AirportController = require('../../controllers/airport-controller');

const router = express.Router();

router.post('/city', CityController.create);
router.delete('/city/:id', CityController.destroy);
router.patch('/city/:id', CityController.update);
router.get('/city/:id', CityController.get);
router.get('/city', CityController.getAll);

router.post('/flights', FlightMiddlewares.validateCreateFlight, FlightCOntroller.create);
router.get('/flights', FlightCOntroller.getAll);
router.get('/flights/:id', FlightCOntroller.get);
router.patch('/flights/:id', FlightCOntroller.update);

router.post('/airport', AirportController.create);

module.exports = router