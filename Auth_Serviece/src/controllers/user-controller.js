const UserServiece = require('../servieces/user-serviece');

const userServiece = new UserServiece();

const createUser = async (req, res) => {
    try {
        const response = await userServiece.createUser({
            email: req.body.email,
            password: req.body.password
        });
        return res.status(201).json({
            data: response.email,
            message: 'successfully sign up',
            success: true,
            err: {},
        })
    } catch (error) {
        console.log('something went wrong in controller layer');
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to sign up",
            err: error,
        })
    }
}

module.exports = {
    createUser,
}