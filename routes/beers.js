var express = require('express');
var router = express.Router();
var knex = require('../knex')

/* GET users listing. */
router.get('/', (req, res, next) => {
  knex('beers')
//.select('beer_name', 'favor_value')
.then((beers) => {
  res.send(beers)
})
})

module.exports = router;
