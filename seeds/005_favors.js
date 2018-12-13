
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('favors').del()
    .then(function () {
      // Inserts seed entries
      return knex('favors').insert([
        {id: 1, favor_name: 'house sitting', favor_size: 3},
        {id: 2, favor_name: 'moving furniture', favor_size: 3 },
        {id: 3, favor_name: 'pet sitting', favor_size: 3},
        {id: 4, favor_name: 'mowing lawn', favor_size: 2 },
        {id: 5, favor_name: 'washing car', favor_size: 2 },
        {id: 6, favor_name: 'doing laundry', favor_size: 2},
        {id: 7, favor_name: 'giving a ride', favor_size: 1 },
        {id: 8, favor_name: 'bailing out of jail', favor_size: 1 }
      ])
    })
    .then(() => {
  return knex.raw(
    "SELECT setval('favors_id_seq', (SELECT MAX(id) FROM favors));"
  )
})
};
