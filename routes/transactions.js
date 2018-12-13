var express = require('express');
var router = express.Router();
var knex = require('../knex')

/* GET users listing. */
router.get('/:id', (req, res, next)=> {
  let id=req.params.id
  knex('transactions')
    .select('transactions.id','transactions.recipient_id','transactions.user_sender_id','transactions.favor','transactions.beer_id','u1.first_name as sender_first_name','u1.last_name as sender_last_name','u1.is_sender as sender','u2.first_name','u2.last_name','u2.is_sender')
    .where('recipient_id',id)
    .innerJoin('users as u2','transactions.user_sender_id','u2.id')
    .innerJoin('users as u1','transactions.recipient_id','u1.id')
    .then(result=>{

      res.send(result)
    })
});

module.exports = router;
