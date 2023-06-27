const { ClientErrorsCodes, ServerErrorsCodes, SuccessCodes } = require('../utils/error-codes');

const validateCreateFlight = (req, res, next) => {
    if (
        !req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.departureAirport ||
        !req.body.arrivalAirport ||
        !req.body.departureTime ||
        !req.body.arrivalTime ||
        !req.body.price

    ) {
        return res.status(ClientErrorsCodes.BAD_REQUEST).json({
            data: {},
            success: false,
            message: 'Invalid request body',
            err: 'Missing some required information',
        })
    }

    next();
}

module.exports = {
    validateCreateFlight,
}