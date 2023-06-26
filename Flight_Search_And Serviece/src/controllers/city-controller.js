const { CityServiece } = require('../servieces/index');

const cityServiece = new CityServiece();

const create = async (req, res) => {
    try {
        const city = await cityServiece.createCity(req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message: 'Successfully created a city',
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'not able to create city',
            err: error
        })
    }
}

const destroy = async (req, res) => {
    try {
        const response = await cityServiece.deleteCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully deleted a city',
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'not able to delete city',
            err: error
        })
    }
}

const update = async (req, res) => {
    try {
        const city = await cityServiece.updateCity(req.params.id, req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message: 'Successfully updated a city',
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'not able to update city',
            err: error
        })
    }
}

const get = async (req, res) => {
    try {
        const city = await cityServiece.getCity(req.params.id);
        return res.status(200).json({
            data: city,
            success: true,
            message: 'Successfully created a city',
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'not able to get city',
            err: error
        })
    }
}


module.exports = {
    create,
    destroy,
    update,
    get
}