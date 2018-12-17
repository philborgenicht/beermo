var express = require('express');
var router = express.Router();
var knex = require('../knex')

/* GET users listing. */
router.get('/:id', (req, res, next)=> {
  let id=req.params.id
  knex('transactions')
    .select('transactions.id','transactions.recipient_id','transactions.user_sender_id','transactions.favor','transactions.beer_id','transactions.created_at','u1.first_name as sender_first_name','u1.last_name as sender_last_name','u1.is_sender as sender','u2.first_name','u2.last_name','u2.is_sender')
    .where('recipient_id',id)
    .innerJoin('users as u1','transactions.user_sender_id','u1.id')
    .innerJoin('users as u2','transactions.recipient_id','u2.id')
    .then(result=>{
      console.log(result)
      res.send(result)
    })
});

router.get('/:id', (req, res, next)=> {
  let id=req.params.id
  knex('transactions')
    .select('transactions.id','transactions.recipient_id','transactions.user_sender_id','transactions.favor','transactions.beer_id','transactions.created_at','u1.first_name as sender_first_name','u1.last_name as sender_last_name','u1.is_sender as sender','u2.first_name','u2.last_name','u2.is_sender')
    .where('user_sender_id',id)
    .innerJoin('users as u1','transactions.user_sender_id','u1.id')
    .innerJoin('users as u2','transactions.recipient_id','u2.id')
    .then(result=>{
      console.log(result)
      res.send(result)
    })
});

module.exports = router;
