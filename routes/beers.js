var express = require('express');
var router = express.Router();
var knex = require('../knex')

/* GET users listing. */
<<<<<<< HEAD
router.get('/', (req, res, next) => {
  knex('beers')
//.select('beer_name', 'favor_value')
.then((beers) => {
  res.send(beers)
})
})
=======
router.get('/', function(req, res, next) {
  knex('beers')
  .then(data=>{
    res.send(data)
  })
})

router.get('/:id', function(req, res, next){
  knex('beers')
  .where('id', req.params.id)
  .then(data=>{
    res.send(data[0])
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





>>>>>>> 6646a354de26af310ca124fe07bde8328660af07

module.exports = router;
