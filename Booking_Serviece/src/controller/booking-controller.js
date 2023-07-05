const { StatusCodes } = require('http-status-codes')
const { BookingServiece } = require('../servieces/index');
const { createChannel, publishMessage } = require('../utils/message-queue');
const { REMAINDER_BINDING_KEY } = require('../config/server-config');

const bookingServiece = new BookingServiece();


class BookingController {

    constructor() {

    }

    async sendMessageToQueues(req, res) {
        try {
            const channel = await createChannel();
            const data = { message: 'Success' }
            publishMessage(channel, REMAINDER_BINDING_KEY, JSON.stringify(data));
            return res.status(200).json({
                message: 'Successfylly publish the event',
                data: data,
                serviece: 'DEMO_SERVIECE',

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

/* const create = async (req, res) => {

} */

module.exports = BookingController;