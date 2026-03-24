const express = require('express');
const router = express.Router();

const controller = require('./controller');
const PREFIX = 'deposits';

router.get(`/${PREFIX}/:depositID`, controller.getDepositByID);

module.exports = router;
