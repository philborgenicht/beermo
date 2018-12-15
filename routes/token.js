let express = require('express');
let router = express.Router();
let knex = require('../knex')
const jwt = require('jsonwebtoken')
let bcrypt = require('bcryptjs')


/* GET users listing. */

router.get('/:id', function(req,res,next){

  let user

  knex('users')
  .where('id',id)
  .first()
  .then(row=>{
    user = row
  }).then(data=>{
    if (!data) {
      return next({ status: 400, message: 'Bad email or password' })
    }
    jwt.verify(req.cookies.token, user.hashed_password, (err, _payload) => {
      if (err) {
        return res.send(false)
      }

      res.send(true)
    })
  })
})

router.post('/', function(req,res,next){
  const { email, password } = req.body
  if (!email || !email.trim()) {
    return next({ status: 400, message: 'Email must not be blank' })
  }

  if (!password || !password.trim()) {
    return next({ status: 400, message: 'Password must not be blank' })
  }

  let user

  knex('users')
  .where('email',email)
  .first()
  .then(row=>{

      if (!row) {
        return next({ status: 400, message: 'Bad email or password' })
      }

      user = row

      return bcrypt.compareSync(password, user.hashed_password)
    })
    .then((data) => {

      if (!data) {
        return next({ status: 400, message: 'Bad email or password' })
      }
      const claim = { userId: user.id }

      const token = jwt.sign(claim, user.hashed_password)
      console.log(token)

      res.cookie('token', token, {
        httpOnly: true
      })
      delete user.hashed_password
      res.send(user)
    })

    .catch((err) => {
      next(err)
    })
})

router.delete('/token', (req, res) => {
  res.clearCookie('token')
  res.end()
})

module.exports = router;
