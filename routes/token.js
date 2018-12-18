let express = require('express');
let router = express.Router();
let knex = require('../knex')
const jwt = require('jsonwebtoken')
let bcrypt = require('bcryptjs')
let atob = require('atob')


/* GET users listing. */

router.get('/', (req,res,next)=>{
  let user
  let token=req.cookies.token

  if(!token){
    return res.send("")
  }
  let base64Url = token.split('.')[1];
  let base64 = base64Url.replace('-', '+').replace('_', '/');
  let parsed = JSON.parse(atob(base64));
  let id = parsed.userId

  knex('users')
  .where('id',id)
  .first()
  .then(row=>{
    user = row
    return user
  })
  .then(data=>{
    if (!data) {
      return next({ status: 400, message: 'Bad email or password' })
    }
    jwt.verify(req.cookies.token, user.hashed_password, (err, _payload) => {
      if (err) {
        return res.send(false)
      }
      res.json(user.id)
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
        let toastHTML = '<span>I am toast content</span><button class="btn-flat toast-action">Undo</button>';
  M.toast({html: toastHTML});
  return next({ status: 400, message: 'Bad email or password' }) && toastHTML
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

router.delete('/', (req, res) => {
  res.clearCookie('token')
  res.end()
})

router.delete('/:id', (req, res, next)=>{
  let id = req.params.id
  knex('users')
    .where('id', id)
    .then(result=>{
      res.clearCookie('token')
      res.send(result.id)
    })
})

module.exports = router;
