const Pool = require('pg').Pool;
require('dotenv').config()

const pool = new Pool({
    user: "postgres",
    password: "postgres",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE
});


module.exports = pool;