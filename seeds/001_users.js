
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, first_name: 'Ben', last_name: 'Strater-Vidal', email: 'bensvidal@gmail.com', hashed_password: '$2a$12$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS', is_sender: false},
        {id: 2, first_name: 'Mark', last_name: 'Fantini', email: 'markfantini@gmail.com', hashed_password: '$2a$12$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS', is_sender: false},
        {id: 3, first_name: 'Phil', last_name: 'Borgenicht', email: 'philborgenicht@gmail.com', hashed_password: '$2a$12$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS', is_sender: true},
        {id: 4, first_name: 'Will', last_name: 'Brown', email: 'willbrown@gmail.com', hashed_password: '$2a$12$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS', is_sender: false},
        {id: 5, first_name: 'Walter', last_name: 'White', email: 'heisenberg@a1carwash.com', hashed_password: '$2a$12$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS', is_sender: true},
        {id: 6, first_name: 'Jesse', last_name: 'Pinkman', email: 'captaincook@lospolloshermanos.com', hashed_password: '$2a$12$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS', is_sender: true}
      ])
    })
    .then(() => {
  return knex.raw(
    "SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));"
  )
})
};
