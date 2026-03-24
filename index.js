const port = process.env.PORT || 2525;
const express = require('express');
const bodyParser = require('body-parser');

const databaseSetup = require('./infrastructure/database');

const app = express();
const router = require('./router');

databaseSetup.setup()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(router);
app.listen(port, () => console.log(`All set up. Listening on ${port}!`))
