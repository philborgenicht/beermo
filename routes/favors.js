var express = require('express');
var router = express.Router();
var knex = require('../knex')

/* GET users listing. */
router.get('/', function(req, res, next) {
  knex('favors')
  .then(data=>{
    res.send(data)
  })
});

router.get('/:id', function(req, res, next){
  knex('favors')
  .where('id', req.params.id)
  .then(data=>{
    res.send(data)
  })
})

router.post('/', function(req, res, next){
  knex('favors')
  .insert(req.body)
  .returning('*')
  .then(data=>{
    res.send(data)
  })
})

router.patch('/:id', function(req, res, next){
  knex('favors')
  .update(req.body)
  .where('id', req.params.id)
  .returning('*')
  .then(data=>{
    res.send(data)
  })
})



//<cannot delete foreign key from other table>
// router.delete('/:id', function(req, res, next){
//   knex('favors')
//   .where('id', req.params.id)
//   .returning('*')
//   .del()
//   .then(data=>{
//     res.sendStatus(200).send(data[0])
//   })
//
// })

module.exports = router;
