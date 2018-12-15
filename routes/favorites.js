var express = require('express');
var router = express.Router();
var knex = require('../knex')

router.get('/', function(req, res, next) {
  knex('favorite_beers')
  .then(data=>{
    res.send(data)
  })
})

router.get('/:id', function(req, res, next) {
  knex('favorite_beers')
  .where('id', req.params.id)
  .then(data=>{
    res.send(data)
  })
})

router.post('/', function(req, res, next){
  knex('favorite_beers')
  .insert(req.body)
  .returning('*')
  .then(data=>{
    res.send(data)
  })
})

router.patch('/:id', function(req, res, next){
  knex('favorite_beers')
  .update(req.body)
  .where('id', req.params.id)
  .returning('*')
  .then(data=>{
    res.send(data)
  })
})

router.delete('/:id', function(req, res, next){
  knex('favorite_beers')
  .where('id', req.params.id)
  .del()
  .then(data=>{
    res.send(data)
  })
})



module.exports = router;
