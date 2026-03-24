const express = require('express');
const router = express.Router();

router.use(require('./domain/accountHolders/router'));
router.use(require('./domain/deposits/router'));

module.exports = router;
