const { knexSnakeCaseMappers } = require('objection')
const TEMPORARY_DB_CONF = {
  client: 'postgresql',
  connection: {
    database: process.env.db_name,
    user : process.env.db_user,
    password : process.env.db_password,
    host: process.env.db_service_name
  },
  pool: {
    min: 2,
    max: 10,
  },
  ...knexSnakeCaseMappers()
}
module.exports = {
  localhost: {
    client: 'postgresql',
    connection: {
      database: 'example',
      user : 'admin',
      password : 'admin',
      host: 'localhost'
    },
    pool: {
      min: 2,
      max: 10,
    },
    seeds: { directory: './seeds' },
  },
  development: TEMPORARY_DB_CONF,
  production: TEMPORARY_DB_CONF
}
