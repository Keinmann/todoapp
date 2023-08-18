const Pool = require('pg').Pool;
require('dotenv').config()

const pool = new Pool({
    user: 'postgres',
    password: `postgres`,
    host: process.env.LOCALHOST,
    port: process.env.PORT,
    database: 'todoapp'
});


module.exports = pool;