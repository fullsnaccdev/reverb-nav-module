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
  .route('/getInstruments/:query')
  .get((req, res) => {
    let { query } = req.params;
    let search = query.split(' ');
    let condition = '';
    if (search.length === 1) {
      let queryStr = `SELECT * FROM instruments WHERE name LIKE "%${search[0]}%"`;
      db.query(queryStr, (err, results) => {
        if(err) {
          res.status(404).send(err);
        }
        let categoryContainer = {};
        for (let j = 0; j < results.length; j++) {
          if(categoryContainer[results[j].category] === undefined) {
            categoryContainer[results[j].category] = 1;
          }
        }
        let instrumentResults = {};
        instrumentResults.instruments = results;
        instrumentResults.categories = Object.keys(categoryContainer);
        res.status(200).send(instrumentResults);
      })
    } else {
      for (let i = 0; i < search.length; i++) {
        if (i === search.length - 1) {
          condition += `name LIKE "%${search[i]}%"`;
        } else {
          condition += `name LIKE "%${search[i]}%" AND `;
        }
      }
      let queryStr = `SELECT * FROM instruments WHERE (${condition})`;
      db.query(queryStr, (err, results) => {
        if(err) {
          res.status(404).send(err);
        }
        let categoryContainer = {};
        for (let j = 0; j < results.length; j++) {
          if(categoryContainer[results[j].category] === undefined) {
            categoryContainer[results[j].category] = 1;
          }
        }
        let instrumentResults = {};
        instrumentResults.instruments = results;
        instrumentResults.categories = Object.keys(categoryContainer);
        res.status(200).send(instrumentResults);
      })
    }
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