const { config } = require('dotenv');
config()
const Pool = require('pg').Pool;

const pool = new Pool ({
  user: process.env.user,
  password: process.env.password,
  host: process.env.host,
  database: process.env.database,
  port: process.env.host
})

module.exports = pool;