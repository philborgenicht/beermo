'use strict'

exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments()
    table.boolean('is_active').notNullable().defaultTo(true)
    table.string('first_name').notNullable().defaultTo('')
    table.string('last_name').notNullable().defaultTo('')
    table.string('email').notNullable().defaultTo('')
    table.string('hashed_password').notNullable().defaultTo('')
    table.boolean('is_sender').defaultTo(null)
    table.timestamps(true, true)
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('users')
}
