# Banking Example - Just Commands

# Start containers in detached mode
up:
    docker-compose up -d

# Stop containers
down:
    docker-compose down

# Wipe everything (containers + volume)
nuke:
    docker-compose down -v

# Run database migrations
migrate:
    npx knex migrate:latest --knexfile ./infrastructure/knexfile.js --env localhost

# Run database seeds
seed:
    npx knex seed:run --knexfile ./infrastructure/knexfile.js --env localhost

# Full reset: wipe, fresh start, migrate, seed — all in one shot
chaching:
    docker-compose down -v
    docker-compose up -d
    sleep 5
    npx knex migrate:latest --knexfile ./infrastructure/knexfile.js --env localhost
    npx knex seed:run --knexfile ./infrastructure/knexfile.js --env localhost

# Start app in foreground (with logs)
logs:
    docker-compose up
