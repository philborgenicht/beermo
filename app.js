var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var transactionsRouter = require('./routes/transactions');
var beersRouter= require('./routes/beers');
var favorsRouter= require('./routes/favors');
var favoritesRouter= require('./routes/favorites');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/beers', beersRouter);
app.use('/transactions', transactionsRouter);
app.use('/favors', favorsRouter);
app.use('/favorites', favoritesRouter);

module.exports = app;
