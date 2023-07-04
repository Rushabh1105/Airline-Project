const TicketServiece = require('../servieces/email-serviece');

const create = async (req, res) => {
    try {
        const response = await TicketServiece.createTicket(req.body);
        return res.status(201).json({
            data: response,
            success: true,
            message: 'Successfully create ticket',
            err: {}
        })
    } catch (error) {
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