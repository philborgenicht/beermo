let express = require('express');
let router = express.Router();
let knex = require('../knex')
const jwt = require('jsonwebtoken')
let bcrypt = require('bcryptjs')


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

router.post('/:id', function(req,res,next){
  let id=req.params.id

  const { email, hashed_password } = req.body
  if (!email || !email.trim()) {
    return next({ status: 400, message: 'Email must not be blank' })
  }

  if (!hashed_password || !hashed_password.trim()) {
    return next({ status: 400, message: 'Password must not be blank' })
  }

  let user

  knex('users')
  .where('id',id)
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
      const token = jwt.sign(claim, process.env.JWT_KEY, {
        expiresIn: '7 days'  // Adds an exp field to the payload
      })

      res.cookie('token', token, {
        httpOnly: true,
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),  // 7 days
        secure: router.get('env') === 'production'  // Set from the NODE_ENV
      })

      delete user.hashedPassword
      res.send(user)
    })

    .catch((err) => {
      next(err)
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
