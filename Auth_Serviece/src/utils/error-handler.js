
const { INTERNAL_SERVER_ERROR } = require('http-status-codes')

class AppErrors extends Error {
    constructor(
        name = 'AppError',
        message = 'Something Went Wrong',
        explanation = 'Something Went Wrong',
        statusCode = INTERNAL_SERVER_ERROR,
    ) {
        super();
        this.message = message;
        this.explanation = explanation;
        this.name = name;
        this.statusCode = statusCode

    }
}

module.exports = AppErrors;