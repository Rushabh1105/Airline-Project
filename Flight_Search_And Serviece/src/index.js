const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("sequelize");


const { PORT } = require("./config/serverConfig");
const ApiRoutes = require('./routes/index');
const db = require('./models/index');


const setupAndStartServer = async () => {
    // create the express object
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use('/api', ApiRoutes);

    // start the server
    app.listen(PORT, async () => {
        console.log(`Server Started on ${PORT}`);
        if (process.env.SYNC_DB) {
            db.sequelize.sync({ alter: true });
        }
        //console.log(process.env);
    })

}

setupAndStartServer();