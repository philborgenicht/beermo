let express = require('express');
let router = express.Router();
let knex = require('../knex')
let cors = require('cors')
let bcrypt = require('bcryptjs')
let salt = bcrypt.genSaltSync(10)
// router.use(cors())

/* GET users listing. */
router.get('/', (req, res, next)=>{
  knex('users')
  .then(data=>{
    res.send(data)
  })
})

router.get('/:id', (req,res,next)=>{
  let id=req.params.id
  knex('users')
  .where('id',id)
  .then(data=>{
    res.send(data)
  })
})

router.post('/', (req,res,next)=>{
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

router.patch('/:user', (req, res, next)=>{
  console.log(req.body.hashed_password)
  let passWord = req.body.hashed_password
  let hash = bcrypt.hashSync(passWord, 8);
  let body = req.body
  body[ 'hashed_password' ] = hash;

  knex('users')
  .update(body)
  .where('id', req.params.user)
  .returning('*')
  .then(data=>{
    res.send(data)
  })
})

router.patch('/delete/:email', (req, res, next)=>{
  knex('users')
  .where('email', req.params.email)
  .update({is_active:false})
  .returning(['first_name','last_name'])
  .then(data=>{
    res.send(data)
  })

})



module.exports = router;
