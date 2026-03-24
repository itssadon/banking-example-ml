const Knex = require('knex')
const knexConfig = require('./knexfile')
const { Model } = require('objection')
const knex = Knex(knexConfig.development)

module.exports = {
    setup: () => {
        Model.knex(knex)
        console.log('Model connected to Knex')
    }
}