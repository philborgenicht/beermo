var express = require('express');
var router = express.Router();
var knex = require('../knex')



router.get('/transactions/:id', function(req, res, next){
  knex('transactions')
  .join('users', 'transactions.recipient_id', 'users.id' )
  .then(data=>{
    res.send(data)
  })
})


module.exports = router;
