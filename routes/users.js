let express = require('express');
let router = express.Router();
let knex = require('../knex')
let bcrypt = require('bcryptjs')
let salt = bcrypt.genSaltSync(10)


/* GET users listing. */
router.get('/', function(req, res, next) {
  knex('users')
  .then(data=>{
    res.send(data)
  })
})

router.get('/:id', function(req,res,next){
  let id=req.params.id
  knex('users')
  .where('id',id)
  .then(data=>{
    res.send(data[0])
  })
})

router.post('/', function(req,res,next){
  let passWord = req.body.hashed_password
  let hash = bcrypt.hashSync(passWord, 8);
  let body = req.body
  body[ 'hashed_password' ] = hash;

  knex('users')
  .insert(req.body)
  .returning(['first_name','last_name','email'])
  .then(data=>{
    res.send(data)
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
