var express = require('express');
var router = express.Router();
var pool = require('./db');

// User Profile Express Routes
router.post('/api/userprofiletodb', (req, res, next) => {
  let el = req.body.email;
  el = el.split('');

  let username = '';

  for (let i = 0; i < el.length; i++) {
    if (el[i] === '@') {
      break;
    }
    username += el[i];
  }

  const values = [username, req.body.email, req.body.name];

  pool.query(
    'INSERT INTO users(username, email, name, date_created) VALUES($1, $2, $3, NOW())',
    values,
    (q_err, q_res) => {}
  );
  res.json('...');
});

router.post('/api/userprofilefromdb', (req, res, next) => {
  const email = req.body.email;

  pool.query(`SELECT * FROM users WHERE email=$1`, [email], (q_err, q_res) => {
    res.json(q_res.rows[0]);
  });
});

router.post('/api/profile/allprofiles', (req, res, next) => {
  pool.query('SELECT * FROM users ORDER BY date_created DESC', (q_err, q_res) => {
    res.json(q_res.rows);
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

router.post('/api/post/allposts', (req, res, next) => {
  pool.query('SELECT * FROM posts ORDER BY date_created DESC', (q_err, q_res) => {
    res.json(q_res.rows);
  });
});

router.post('/api/post/updatepost', (req, res, next) => {
  const values = [req.body.title, req.body.body, req.body.uid, req.body.pid, req.body.username];

  pool.query(
    `UPDATE posts SET title=$1, body=$2, user_id=$3, author=$5, date_created=NOW() WHERE pid=$4`,
    values,
    (q_err, q_res) => {}
  );
  res.json('...');
});

router.post('/api/delete/post', (req, res, next) => {
  const post_id = req.body.post_id;

  pool.query(`DELETE FROM posts WHERE pid =$1`, [post_id], (q_err, q_res) => {});
  res.json('...');
});

router.post('/api/post/updatepostlikes', (req, res, next) => {
  const values = [req.body.pid, req.body.liked_by];

  pool.query(`UPDATE posts SET liked_by=$2 WHERE pid=$1`, values, (q_err, q_res) => {});
  res.json('...');
});

// Comments Express Route
router.post('/api/comment/allcomments', (req, res, next) => {
  pool.query('SELECT * FROM comments ORDER BY date_created DESC', (q_err, q_res) => {
    res.json(q_res.rows);
  });
});

router.post('/api/comment/commenttodb', (req, res, next) => {
  const values = [req.body.comment, req.body.author, req.body.uid, req.body.pid];

  pool.query(
    `INSERT INTO comments(comment, author, user_id, post_id, date_created) VALUES ($1, $2, $3, $4, NOW())`,
    values,
    (q_err, q_res) => {}
  );
  res.json('...');
});

router.post('/api/comment/updatecomment', (req, res, next) => {
  const values = [req.body.comment, req.body.cid];

  pool.query(`UPDATE comments SET comment=$1, date_created=NOW() WHERE cid=$2`, values, (q_err, q_res) => {});
  res.json('...');
});

router.post('/api/delete/comment', (req, res, next) => {
  const cid = req.body.cid;

  pool.query(`DELETE FROM comments WHERE cid =$1`, [cid], (q_err, q_res) => {});
  res.json('...');
});

// Messages Express Route
router.post('/api/messages/allmessages', (req, res, next) => {
  pool.query('SELECT * FROM messages ORDER BY date_created DESC', (q_err, q_res) => {
    res.json(q_res.rows);
  });
});

module.exports = router;
