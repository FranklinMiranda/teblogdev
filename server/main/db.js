const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'db1.ctabshmi3bib.us-east-1.rds.amazonaws.com',
  database: 'teblog',
  password: 'postgres',
  port: 5432,
});

module.exports = pool;


