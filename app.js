let express = require('express')
let path = require('path')
let cookieParser = require('cookie-parser')
let logger = require('morgan')

let usersRouter = require('./routes/users')
let transactionsRouter = require('./routes/transactions')
let beersRouter= require('./routes/beers')
let favorsRouter= require('./routes/favors')
let favoritesRouter= require('./routes/favorites')
let signupRouter = require('./routes/signup')
let tokenRouter = require('./routes/token')

let app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/token', tokenRouter)
app.use('/signup', signupRouter)
app.use('/users', usersRouter)
app.use('/beers', beersRouter)
app.use('/transactions', transactionsRouter)
app.use('/favors', favorsRouter)
app.use('/favorites', favoritesRouter)

module.exports = app
