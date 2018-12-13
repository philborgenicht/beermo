
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('beers').del()
    .then(function () {
      // Inserts seed entries
      return knex('beers').insert([
        {id: 1, beer_name: 'Old Rasputin', favor_value: 3},
        {id: 2, beer_name: 'Crooked Stave Raspberry Sour', favor_value: 3},
        {id: 3, beer_name: 'Avery IPA', favor_value: 2},
        {id: 4, beer_name: 'Mama\'s Yella Pils', favor_value: 2},
        {id: 5, beer_name: 'Pabst Blue Ribbon', favor_value: 1},
        {id: 6, beer_name: 'Coors Banquet', favor_value: 1 },
        {id: 7, beer_name: 'Dos Equis', favor_value: 1},
        {id: 8, beer_name: 'Malt Liquor', favor_value: 1},
        {id: 9, beer_name: 'Colt 45', favor_value: 1},
        {id: 10, beer_name: 'Old English', favor_value: 1},
        {id: 11, beer_name: 'Mickey\'s', favor_value:1}
      ])
    })
    .then(() => {
  return knex.raw(
    "SELECT setval('beers_id_seq', (SELECT MAX(id) FROM beers));"
  )
})
};
