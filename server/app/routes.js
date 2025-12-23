const express = require('express');
const router = express.Router();
const { joinWaitlist, getCount } = require('./controller');

router.post('/join', joinWaitlist);
router.get('/count', getCount);

module.exports = router;