exports.up = (knex) => {
  return knex.schema
    .createTable('account_holders', (table) => {
      table.increments('id').primary()
      table.string('firstName')
      table.string('lastName')
      table.timestamps(true, true)
    })
    .createTable('deposits', (table) => {
      table.increments('id').primary()
      table
        .integer('account_holder_id')
        .unsigned()
        .references('id')
        .inTable('account_holders')
        .onDelete('SET NULL')
        .index()
      table.decimal('amount', 14, 2).defaultTo(0)
      table.timestamps(true, true)
    })
    .createTable('withdrawals', (table) => {
      table.increments('id').primary()
      table
        .integer('account_holder_id')
        .unsigned()
        .references('id')
        .inTable('account_holders')
        .onDelete('SET NULL')
        .index()
      table.decimal('amount', 14, 2).defaultTo(0)
      table.timestamps(true, true)
    })
}

exports.down = (knex) => {
  return knex.schema
    .dropTableIfExists('withdrawals')
    .dropTableIfExists('deposits')
    .dropTableIfExists('account_holders')
}
