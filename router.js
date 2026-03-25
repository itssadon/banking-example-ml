const express = require('express');
const router = express.Router();

router.use(require('./domain/accountHolders/router'));
router.use(require('./domain/deposits/router'));
router.use(require('./domain/withdrawals/router'));

module.exports = router;
