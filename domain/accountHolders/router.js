const express = require('express');
const router = express.Router();

const controller = require('./controller');
const PREFIX = 'account_holders';

router.get(`/${PREFIX}/:accountHolderID`, controller.getAccountHolderByID);

module.exports = router;
