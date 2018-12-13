'use strict'

exports.up = function(knex) {
  return knex.schema.createTable('transactions', (table) => {
    table.increments()

    table.integer('recipient_id').unsigned()
    table.foreign('recipient_id').references('users.id')

    table.integer('user_sender_id').unsigned()
    table.foreign('user_sender_id').references('users.id')

    table.string('favor').unsigned()
    table.foreign('favor').references('favors.favor_name')


    table.string('beer_id').unsigned()
    table.foreign('beer_id').references('beers.beer_name')

    table.timestamps(true, true)

  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('transactions')
}
