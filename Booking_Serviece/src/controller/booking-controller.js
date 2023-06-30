const { StatusCodes } = require('http-status-codes')
const { BookingServiece } = require('../servieces/index');

const bookingServiece = new BookingServiece();

const create = async (req, res) => {
    try {
        const response = await bookingServiece.createBooking(req.body);
        return res.status(StatusCodes.CREATED).json({
            data: response.data,
            success: true,
            message: 'successfully booked a flight',
            err: {}
        })
    } catch (error) {
        return res.status(error.statusCode).json({
            success: false,
            data: {},
            message: error.message,
            err: error.explanation
        })
    }
}

module.exports = {
    create,
}