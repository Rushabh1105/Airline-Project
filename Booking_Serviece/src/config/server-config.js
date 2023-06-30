const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    PORT: process.env.PORT,
    DB_SYNC: process.env.DB_SYNC,
    FLIGHT_SERVIECE_PATH: process.env.FLIGHT_SERVIECE_PATH
}