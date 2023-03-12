const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'teblog',
  password: 'Emp2030!',
  port: 5432,
});

module.exports = pool;


