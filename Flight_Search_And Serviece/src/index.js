const express = require("express");
const bodyParser = require("body-parser");


const { PORT } = require("./configs/serverConfig");


const setupAndStartServer = async () => {
    // create the express object
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    // start the server
    app.listen(PORT, () => {
        console.log(`Server Started on ${PORT}`);
        //console.log(process.env);
    })

}

setupAndStartServer();