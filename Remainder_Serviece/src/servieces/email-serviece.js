const sender = require('../config/email-config');
const TicketRepository = require('../repository/ticket-repository');

const repo = new TicketRepository();

const sendBasicEmail = async (mailFrom, mailTo, mailSubject, mailBody) => {
    try {
        const response = await sender.sendMail({
            from: mailFrom,
            to: mailTo,
            subject: mailSubject,
            text: mailBody
        });

        console.log(response);
    } catch (error) {
        console.log(error)
    }
}

const fetchPendingEmails = async (timestamp) => {
    try {
        const response = await repo.get({ status: "PENDING" });
        return response;
    } catch (error) {
        console.log(error);
        throw { error };
    }
}

const updateTicket = async (ticketId, data) => {
    try {
        const response = await repo.updateStatus(ticketId, data);
        return response
    } catch (error) {
        console.log(error);
        throw { error };
    }
}

const createTicket = async (data) => {
    try {
        const response = await repo.createTicket(data);
        return response;
    } catch (error) {
        console.log(error);
        throw { error }
    }
}

module.exports = {
    sendBasicEmail,
    fetchPendingEmails,
    createTicket,
    updateTicket
}