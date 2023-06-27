
const { AirportServiece } = require('../servieces/index');

const airportServiece = new AirportServiece();

const create = async (req, res) => {
    try {
        const response = await airportServiece.create(req.body);
        return res.status(201).json({
            data: response,
            message: 'created the airport',
            success: true,
            err: {}
        })
    } catch (error) {
        console.log(error);
        throw { error };
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Something went wrong',
            err: error
        })
    }
}

module.exports = {
    create,

}