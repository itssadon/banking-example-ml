# Pair-programming assignment for a banking application
Banking application API.

## Assignment
This is an MVP of a simple banking API with a goal to expose API for:
- viewing account holders' data and balance
- making deposits for account holder
- making withdrawals for account holder

Currently, there are API endpoints for
- viewing account holders' data (without balance)
- making deposit for account holder

**Our goal** is to:
- add logic and endpoints to create withdrawals
- add logic to calculate account holders' balances

As this project is not in production, we can modify existing table schemas, migrations, seed data etc.

When you see something should be improved / done differently, feel free to do that.

## Tech stack
- NodeJS
- Express
- Knex
- ObjectionJS
- Postgres
- Docker
## How to run
### Prerequisites
- Make sure you have Docker and NodeJS installed.
- Make sure you have [Knex](https://knexjs.org/) installed globally.

    ```npm install knex -g```
### Running the application for the first time
- Start the DB and Service

    `docker-compose up`
- Run migrations

    `knex migrate:latest --knexfile ./infrastructure/knexfile.js --env localhost`
- Add sample content

    `knex seed:run --knexfile ./infrastructure/knexfile.js --env localhost`
- Install Just for chain command running (optional)

    Windows: `winget install Casey.Just`

    Mac: `brew install just`

    `just chaching` (if you have it installed) runs all the commands from docker-compose down, to up and then migrations and seeds

- Project should be listening on port `2525`!
