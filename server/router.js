const router = require('express').Router();
const db = require('./db');


router
  .route('/getAllInstruments')
  .get((req, res) => {
    let queryStr = `SELECT * FROM instruments`;
    db.query(queryStr, (err, results) => {
      if(err) {
        res.status(404).send(err);
      }
      res.status(200).send(results);
    })
  })

router
  .route('/getAllNews')
  .get((req, res) => {
    let queryStr = `SELECT * FROM news`;
    db.query(queryStr, (err, results) => {
      if(err) {
        res.status(404).send(err);
      }
      res.status(200).send(results);
    })
  })

module.exports = router;