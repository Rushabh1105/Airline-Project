const AppErrors = require('./error-handler');
const { ClientErrorCodes } = require('./error-codes');


class ValidationError extends AppErrors {


    constructor(error) {
        let errorName = error.name;
        let explanation = [];
        error.errors.forEach((err) => {
            explanation.push(err.message);
        })
        super(
            errorName,
            'Not able to validate data sent in the request',
            explanation,
            ClientErrorCodes.BAD_REQUEST,
        )
    }
}

module.exports = ValidationError;