var express = require('express');
var router = express.Router();
var pool = require('./db');

// User Profile Express Routes
router.post('/api/userprofiletodb', (req, res, next) => {
  const values = [req.body.name, req.body.email];
  

  pool.query(
    'INSERT INTO users(username, email, date_created) VALUES($1, $2, NOW()) ON CONFLICT DO NOTHING',
    values,
    (q_err, q_res) => {
      res.json(q_res.rows);
    }
  );
  
});

module.exports = router;
