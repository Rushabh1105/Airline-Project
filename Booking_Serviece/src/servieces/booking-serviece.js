const axios = require('axios');

const { BookingRepository } = require('../repository/index');
const { FLIGHT_SERVIECE_PATH } = require('../config/server-config');
const ServieceError = require('../utils/errors/serviece-error');

class BookingServiece {
    constructor() {
        this.bookingRepository = new BookingRepository();
    }

    async createBooking(data) {
        try {
            const flightId = data.flightId;
            let getFlightrequestUrl = `${FLIGHT_SERVIECE_PATH}/api/v1/flights/${flightId}`;

            const response = await axios.get(getFlightrequestUrl);
            const flightData = response.data.data;
            let priceOfFlight = flightData.price;

            if (data.NoOfSeats > flightData.totalSeats) {
                throw new ServieceError('Something went wrong in process', 'Seats full',)
            }
            const TotalCost = priceOfFlight * data.NoOfSeats;
            console.log(TotalCost);
            const bookingPayload = { ...data, TotalCost };
            const booking = await this.bookingRepository.createBooking(bookingPayload);
            const updateFlightRequestURL = `${FLIGHT_SERVIECE_PATH}/api/v1/flights/${booking.flightId}`;
            await axios.patch(
                updateFlightRequestURL,
                { totalSeats: flightData.totalSeats - booking.NoOfSeats },
            );
            const finalBooking = await this.bookingRepository.updateBooking(booking.id, { status: "Booked" })
            return finalBooking;

        } catch (error) {
            throw new ServieceError();
        }
    }



}

module.exports = BookingServiece;