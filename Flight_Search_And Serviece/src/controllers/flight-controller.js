
const { FlightServiece } = require('../servieces/index');
const { SuccessCodes } = require('../utils/error-codes')

const flightServiece = new FlightServiece();

const create = async (req, res) => {
    try {
        let flightRequestData = {
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            departureTime: req.body.departureTime,
            arrivalTime: req.body.arrivalTime,
            price: req.body.price
        }
        const response = await flightServiece.createFlight(flightRequestData);
        return res.status(SuccessCodes.CREATED).json({
            data: response,
            success: true,
            message: 'Successfully booked a flight',
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to creae a flight',
            err: error,
        })
    }
}

const getAll = async (req, res) => {
    try {
        const response = await flightServiece.getAllFlightData(req.query);
        return res.status(SuccessCodes.OK).json({
            data: response,
            success: true,
            message: 'Successfully booked a flight',
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to fetch flights',
            err: error,
        })
    }
}

const get = async (req, res) => {
    try {
        const response = await flightServiece.getFlight(req.params.id);
        return res.status(SuccessCodes.OK).json({
            data: response,
            success: true,
            message: 'Successfully frtched a flight',
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to fetch flight',
            err: error,
        })
    }
}

module.exports = {
    create,
    getAll,
    get,

}