const validateUserSignup = (req, res, next) => {
    if (!req.body.email || !req.body.password) {
        return res.status(400).json({
            data: {},
            success: false,
            message: 'Bad request',
            err: 'Missing email or password',
        })
    }

    next();
}

const validateIsAdminRequest = (req, res, next) => {
    if (!req.body.userId) {
        return res.status(400).json({
            data: {},
            success: false,
            message: "Bad Request",
            err: "UserId not mentioned",
        })
    }
    next();
}

module.exports = {
    validateUserSignup,
    validateIsAdminRequest
}