const cron = require('node-cron');
const emailServiece = require('../servieces/email-serviece');
const sender = require('../config/email-config')

const setupJobs = () => {
    cron.schedule('*/2 * * * *', async () => {
        const response = await emailServiece.fetchPendingEmails();

        response.forEach((email) => {
            sender.sendMail({
                from: "remainderServiece@airline.com",
                to: email.recepientEmail,
                subject: email.subject,
                text: email.content,
            }, async (err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(data);
                    await emailServiece.updateTicket(email.id, { status: "SUCCESS" });
                }
            });
        });
        console.log(response);
    })
}


module.exports = setupJobs;