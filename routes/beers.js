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

router.get('/', function(req, res, next) {
  knex('beers')
  .then(data=>{
    res.send(data)
  })
})

router.get('/:id', function(req, res, next){
  let favorValue=req.body.favor
  knex('beers')
  .where('favor_value', favorValue)
  .then(data=>{
    res.send(data)
  })
})

router.post('/', function(req, res, next){
  knex('beers')
  .insert(req.body)
  .returning('*')
  .then(data=>{
    res.send(data)
  })
})







module.exports = router;
