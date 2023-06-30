const { StatusCodes } = require('http-status-codes')

const { Booking } = require('../models/index');
const { ValidationError, AppError } = require('../utils/errors/index');

class BookingRepository {
    async createBooking(data) {
        try {
            const booking = await Booking.create(data);
            return booking;
        } catch (error) {
            if (error.name == 'SequelizeValidationError') {
                throw new ValidationError(error);
            }
            throw new AppError(
                'Repository Error',
                'Cannot create booking',
                'There was some issue at our end please try again later',
                StatusCodes.INTERNAL_SERVER_ERROR
            )
        }
    }

    async updateBooking(bookingId, data) {
        try {
            await Booking.update(data, {
                where: {
                    id: bookingId
                }
            });
            return true;
        } catch (error) {
            throw new AppError(
                'Repository Error',
                'Cannot create booking',
                'There was some issue at our end please try again later',
                StatusCodes.INTERNAL_SERVER_ERROR
            )
        }
    }
}

module.exports = BookingRepository;