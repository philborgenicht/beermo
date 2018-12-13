'use strict'

exports.up = function(knex) {
  return knex.schema.createTable('beers', (table) => {
    table.increments()

    table.string('beer_name').unique().notNullable().defaultTo('')
    table.integer('favor_value').notNullable().defaultTo(1)

  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('beers')
}
