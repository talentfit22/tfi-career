const { config } = require('dotenv');
config()
const Pool = require('pg').Pool;

const pool = new Pool ({
  user: "postgres",
  password: "Rauf10",
  host: "localhost",
  database: "talentfit_database",
  port: 5432
})

module.exports = pool;