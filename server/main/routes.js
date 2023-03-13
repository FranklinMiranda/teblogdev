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

// Posts Express Routes
router.post('/api/post/posttodb', (req, res, next) => {
  const values = [req.body.title, req.body.body, req.body.uid, req.body.username];

  pool.query(
    `INSERT INTO posts(title, body, user_id, author, date_created) VALUES ($1, $2, $3, $4, NOW())`,
    values,
    (q_err, q_res) => {
      if (q_err) {
        return next(q_err);
      }
      res.json(q_res.rows);
    }
  );
});

module.exports = router;
