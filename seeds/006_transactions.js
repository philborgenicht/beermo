
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('transactions').del()
    .then(function () {
      // Inserts seed entries
      return knex('transactions').insert([
        {id: 1, recipient_id: 5, user_sender_id: 3, favor: 'Sweet Tat', beer_id: 'Pabst Blue Ribbon'},
        {id: 2, recipient_id: 4, user_sender_id: 3, favor: 'Sweet Tat',  beer_id: 'Mama\'s Yella Pils' },
        {id: 3, recipient_id: 1, user_sender_id: 3, favor: 'Bailing Out of Jail',  beer_id:  'Colt 45'},
        {id: 4, recipient_id: 2, user_sender_id: 4, favor: 'Driving Me To ICP Festival', beer_id:  'Crooked Stave Raspberry Sour'},
        {id: 5, recipient_id: 5, user_sender_id: 3, favor: 'Distracting My Parents with Battle-Rap', beer_id: 'Old English' },
        {id: 6, recipient_id: 4, user_sender_id: 3, favor: 'Late-Life Circumcision', beer_id: 'Mama\'s Yella Pils' },
        {id: 7, recipient_id: 2, user_sender_id: 3, favor: 'Late-Life Circumcision' ,  beer_id: 'Crooked Stave Raspberry Sour' },
        {id: 8, recipient_id: 1, user_sender_id: 3, favor: 'Bailing Out of Jail', beer_id: 'Colt 45' },
        {id: 9, recipient_id: 6, user_sender_id: 3, favor: 'Driving Me To ICP Festival', beer_id: 'Avery IPA'},
        {id: 10, recipient_id: 6, user_sender_id: 4, favor: 'Distracting My Parents with Battle-Rap',  beer_id: 'Old Rasputin' },
        {id: 11, recipient_id: 6, user_sender_id: 3, favor: 'Punching That Annoying Child' ,  beer_id: 'Crooked Stave Raspberry Sour' },
        {id: 12, recipient_id: 6, user_sender_id: 3, favor: 'Punching That Annoying Child',  beer_id: 'Crooked Stave Raspberry Sour' }
      ])
    })
    .then(() => {
  return knex.raw(
    "SELECT setval('transactions_id_seq', (SELECT MAX(id) FROM transactions));"
  )
})
};
