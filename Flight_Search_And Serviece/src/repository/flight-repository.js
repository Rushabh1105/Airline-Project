const { Flight } = require('../models/index');
const { Op } = require('sequelize')

class FlightRepository {

    #createFilter(data) {
        let filter = {};
        if (data.arrivalAirportId) {
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        if (data.arrivalAirportId) {
            filter.departureAirportId = data.departureAirportId;
        }
        if (data.minPrice) {
            Object.assign(filter, { price: { [Op.lte]: data.minPrice } })
        }
        if (data.maxPrice) {
            Object.assign(filter, { price: { [Op.gte]: data.maxPrice } })
        }
        return filter
    }


    async createFlight(data) {
        try {
            const flight = await Flight.create(data);
            return flight;
        } catch (error) {
            throw { error };
        }
    }

    async getFlight(flightId) {
        try {
            const flight = await Flight.findByPk(flightId);
            return flight;
        } catch (error) {
            throw { error }
        }
    }

    async getAllFlights(filter) {
        try {
            const filterObject = this.#createFilter(filter);
            const flight = await Flight.findAll({
                where: filterObject,
            });
            return flight;
        } catch (error) {
            throw { error }
        }
    }

    async updateFlights(flightId, data) {
        try {
            await Flight.update(data, {
                where: {
                    id: flightId
                }
            })
        } catch (error) {
            throw { error }
        }
    }
}


module.exports = FlightRepository;