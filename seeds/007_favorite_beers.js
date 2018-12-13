
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('favorite_beers').del()
    .then(function () {
      // Inserts seed entries
      return knex('favorite_beers').insert([
        {id: 1, user_id: 1, beer_id: 'Coors Banquet'},
        {id: 2, user_id: 2, beer_id: 'Old Rasputin'},
        {id: 3, user_id: 3, beer_id: 'Mama\'s Yella Pils'},
        {id: 4, user_id: 4, beer_id: 'Old English'},
        {id: 5, user_id: 5, beer_id: 'Pabst Blue Ribbon'},
        {id: 6, user_id: 6, beer_id: 'Dos Equis'}
      ])
    })
    .then(() => {
  return knex.raw(
    "SELECT setval('favorite_beers_id_seq', (SELECT MAX(id) FROM favorite_beers));"
  )
})
};
