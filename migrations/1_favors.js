'use strict'

exports.up = function(knex) {
  return knex.schema.createTable('favors', (table) => {
    table.increments()

    table.string('favor_name').unique().notNullable().defaultTo('')
    table.integer('favor_size').notNullable().defaultTo(1)
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('favors')
}
