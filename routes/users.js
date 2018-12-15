let express = require('express');
let router = express.Router();
let knex = require('../knex')
let cors = require('cors')
router.use(cors())

/* GET users listing. */
router.get('/', function(req, res, next) {
  knex('users')
  .then(data=>{
    res.send(data)
  })
})

router.get('/:id', function(req,res,next){
  let email=req.body.email
  knex('users')
  .where('email',email)
  .then(data=>{
    res.send(data)
  })
})

router.post('/', function(req,res,next){
  knex('users')
  .insert(req.body)
  .returning(['first_name','last_name','email'])
  .then(data=>{
    res.send(data)
  })
  .catch(err=>{
    console.log(err)
  })
})

router.patch('/:id', function(req, res, next){
  knex('users')
  .update(req.body)
  .where('id', req.params.id)
  .returning('*')
  .then(data=>{
    res.send(data)
  })
})

router.delete('/:id', function(req, res, next){
  knex('users')
  .where('id', req.params.id)
  .returning('*')
  .del()
  .then(data=>{
    res.send(data)
  })

})



module.exports = router;
