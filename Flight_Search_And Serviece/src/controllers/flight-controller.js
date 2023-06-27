
const { FlightServiece } = require('../servieces/index');

const flightServiece = new FlightServiece();

const create = async (req, res) => {
    try {
        const response = await flightServiece.createFlight(req.body);
        return res.status(201).json({
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

module.exports = {
    create,

}