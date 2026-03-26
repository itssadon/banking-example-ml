const express = require('express');
const router = express.Router();

const controller = require('./controller');
const PREFIX = 'deposits';

router.get(`/${PREFIX}/:depositID`, controller.getDepositByID);
router.post(`/${PREFIX}/:accountHolderID`, controller.createDeposit);

module.exports = router;
