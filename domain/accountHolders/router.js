const express = require('express');
const router = express.Router();

const controller = require('./controller');
const PREFIX = 'account_holders';

router.get(`/${PREFIX}/:accountHolderID`, controller.getAccountHolderByID);
router.get(`/${PREFIX}/:accountHolderID/deposits`, controller.getAccountHolderDeposits);
router.post(`/${PREFIX}/:accountHolderID/deposits`, controller.createAccountHolderDeposit);

module.exports = router;
