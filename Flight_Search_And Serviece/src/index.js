const express = require("express");
const { PORT } = require("./configs/serverConfig");


const setupAndStartServer = async () => {
    // create the express object
    const app = express();

    // 
    app.listen(PORT, () => {
        console.log(`Server Started on ${PORT}`);
        //console.log(process.env);
    })

}

setupAndStartServer();