
const CrudRepository = require('./crud-repository');
const { Airport } = require('../models/index');

class AirportRepository extends CrudRepository {
    constructor() {

        super(Airport)
    }

    //Can use method overriding incase required
}

module.exports = AirportRepository;