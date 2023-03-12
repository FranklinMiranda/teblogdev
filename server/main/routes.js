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

router.post('/api/userprofilefromdb', (req, res, next) => {
  const email = req.body.email;

  pool.query(`SELECT * FROM users WHERE email=$1`, [email], (q_err, q_res) => {
    res.json(q_res.rows[0]);
  });
});

module.exports = router;
