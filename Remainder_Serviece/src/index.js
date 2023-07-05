const express = require('express');
const bodyParser = require('body-parser');

const { PORT, REMAINDER_BINDING_KEY } = require('./config/server-config');
const { createChannel, subscribeMessage } = require('./utils/message-queues');
const apiRouter = require('./router/router');
const jobs = require('./utils/job');
const EmailServiece = require('./servieces/email-serviece');


const setupAndStartServer = async () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    const channel = await createChannel();
    subscribeMessage(channel, EmailServiece.testingQueue, REMAINDER_BINDING_KEY)

    app.use('/api', apiRouter);

    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`)
        //jobs();
    })
}


setupAndStartServer();