const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/server-config');
const { createChannel, } = require('./utils/message-queues')
const apiRouter = require('./router/router');
const jobs = require('./utils/job')


const setupAndStartServer = async () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    const channel = await createChannel();

    app.use('/api', apiRouter);

    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`)
        //jobs();
    })
}


setupAndStartServer();