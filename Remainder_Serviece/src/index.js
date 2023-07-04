const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/server-config');
const apiRouter = require('./router/router');
const jobs = require('./utils/job')


const setupAndStartServer = () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use('/api', apiRouter);

    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`)
        jobs();
    })
}


setupAndStartServer();