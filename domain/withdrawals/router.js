const express = require('express');
const router = express.Router();

const controller = require('./controller');
const PREFIX = 'withdrawals';

router.get(`/${PREFIX}/:withdrawalID`, controller.getWithdrawalByID);
router.post(`/${PREFIX}/:accountHolderID`, controller.makeWithdrawals);

module.exports = router;
