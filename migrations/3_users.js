'use strict'

exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments()
    table.string('first_name').notNullable().defaultTo('')
    table.string('last_name').notNullable().defaultTo('')
    table.string('email').notNullable().defaultTo('')
    table.string('hashed_password').notNullable().defaultTo('')
    table.boolean('is_sender').notNullable().defaultTo(false)
    table.timestamps(true, true)
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('users')
}
