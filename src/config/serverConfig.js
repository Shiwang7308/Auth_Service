const dotenv = require('dotenv');

dotenv.config();  // call env file

module.exports = {
    PORT: process.env.PORT
}