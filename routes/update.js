let express = require('express');
let router = express.Router();
let knex = require('../knex')
let jwt = require('jsonwebtoken')
let bcrypt = require('bcryptjs')

router.post('/', function(req,res,next){
  console.log(req.body)
  let email = req.body.email
  let user

  knex('users')
  .where('email',email)
  .first()
    .then((data) => {
      console.log(data)
      user=data
      if (!data) {

        return next({ status: 400, message: 'Bad email or password' })
      }
      const claim = { userId: user.id }

      const token = jwt.sign(claim, user.hashed_password)

      res.cookie('token', token, {
        httpOnly: true,
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),  // 7 days
        secure: router.get('env') === 'production'  // Set from the NODE_ENV
      })
      delete user.hashed_password
      res.send(user)
    })

    .catch((err) => {
      next(err)
    })
})

module.exports = router
