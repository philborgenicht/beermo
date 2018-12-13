'use strict'

exports.up = function(knex) {
  return knex.schema.createTable('favorite_beers', (table) => {
    table.increments()

    table.integer('user_id').unsigned()
    table.foreign('user_id').references('users.id')

    table.string('beer_id').unsigned()
    table.foreign('beer_id').references('beers.beer_name')

  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('favorite_beers')
}
