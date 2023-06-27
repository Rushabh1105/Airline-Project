
const CrudServiece = require('./crud-serviece');
const { AirportRepository } = require('../repository/index');


class AirportServiece extends CrudServiece {
    constructor() {
        const airportRepository = new AirportRepository();
        super(airportRepository)
    }
}

module.exports = AirportServiece;