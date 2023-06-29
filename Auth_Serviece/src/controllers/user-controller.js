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

const signIn = async (req, res) => {
    try {
        const response = await userServiece.signIn(req.body.email, req.body.password);
        return res.status(201).json({
            data: {
                token: response
            },
            message: 'successfully sign up',
            success: true,
            err: {},
        })
    } catch (error) {
        console.log('something went wrong in controller layer');
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to sign in",
            err: error,
        })
    }
}

const isAuthenticated = async (req, res) => {
    try {
        const token = req.headers['x-access-token'];
        const response = await userServiece.isAuthenticated(token);
        return res.status(201).json({
            data: response.email,
            message: 'User is authenticated',
            success: true,
            err: {},
        })
    } catch (error) {
        console.log('something went wrong in controller layer');
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to sign in",
            err: error,
        })
    }
}

module.exports = {
    createUser,
    signIn,
    isAuthenticated
}