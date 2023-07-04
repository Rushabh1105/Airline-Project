const { StatusCodes } = require('http-status-codes')
const { BookingServiece } = require('../servieces/index');

const bookingServiece = new BookingServiece();

class BookingController {

    constructor(channel) {
        this.channel = channel
    }

    async sendMessageToQueues(req, res) {
        try {

        } catch (error) {
            return res.status(error.statusCode).json({
                success: false,
                data: {},
                message: error.message,
                err: error.explanation
            })
        }
    }

    async create(req, res) {
        try {
            const response = await bookingServiece.createBooking(req.body);
            return res.status(StatusCodes.CREATED).json({
                data: response,
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
}

const create = async (req, res) => {

}

module.exports = BookingController;