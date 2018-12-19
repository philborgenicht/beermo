
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('favors').del()
    .then(function () {
      // Inserts seed entries
      return knex('favors').insert([
        {id: 1, favor_name: 'House Sitting', favor_size: 3, lister: 2},
        {id: 2, favor_name: 'Moving Furniture', favor_size: 3, lister: 1 },
        {id: 3, favor_name: 'Sweet Tat', favor_size: 3, lister: 3},
        {id: 4, favor_name: 'Mowing Lawn', favor_size: 2, lister: 5 },
        {id: 5, favor_name: 'Washing Car, Along With My Dirty Self', favor_size: 2, lister: 6 },
        {id: 6, favor_name: 'Doing Laundry', favor_size: 2, lister: 1},
        {id: 7, favor_name: 'Distracting My Parents with Battle-Rap', favor_size: 2, lister: 4 },
        {id: 8, favor_name: 'Bailing Out of Jail', favor_size: 1, lister: 1 },
        {id: 9, favor_name: 'Driving Me To ICP Festival', favor_size: 1, lister: 3 },
        {id: 10, favor_name: 'Late-Life Circumcision', favor_size: 3, lister: 2 },
        {id: 11, favor_name: 'Punching That Annoying Child', favor_size: 1, lister: 5 },
      ])
    })
    .then(() => {
  return knex.raw(
    "SELECT setval('favors_id_seq', (SELECT MAX(id) FROM favors));"
  )
})
};
