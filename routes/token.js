let express = require('express');
let router = express.Router();
let knex = require('../knex')
const jwt = require('jsonwebtoken')
let bcrypt = require('bcryptjs')


/* GET users listing. */

router.get('/:id', function(req,res,next){
  let id = req.params.id
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
  const { email, hashed_password } = req.body
  if (!email || !email.trim()) {
    return next({ status: 400, message: 'Email must not be blank' })
  }

  if (!hashed_password || !hashed_password.trim()) {
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

      return bcrypt.compare(hashed_password, user.hashed_Password)
    })
    .then((data) => {
      if (!data) {
        return next({ status: 400, message: 'Bad email or password' })
      }
      const claim = { userId: user.id }
      const token = jwt.sign(claim, user.hashed_Password, {
        expiresIn: '7 days'  // Adds an exp field to the payload
      })

      res.cookie('token', token, {
        httpOnly: true,
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),  // 7 days
        secure: router.get('env') === 'production'  // Set from the NODE_ENV
      })

      delete user.hashed_Password
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
