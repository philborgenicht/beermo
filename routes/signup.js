let express = require('express');
let router = express.Router();
let knex = require('../knex')
let bcrypt = require('bcryptjs')
let salt = bcrypt.genSaltSync(10)

router.post('/', (req,res,next) => {
  let passWord = req.body.password
  let hash = bcrypt.hashSync(passWord, 8);
  let body = req.body
  body[ 'hashed_password' ] = hash;

  knex('users')
  .insert(body)
  .returning(['first_name','last_name','email'])
  .then(data=>{
    res.send(data)
  })
})

module.exports = router;
