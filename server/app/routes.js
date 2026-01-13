const express = require('express');
const router = express.Router();
const { joinWaitlist, getCount } = require('./controller');
const { registerUser, getUserCount } = require('./Fetchitt.controller');

router.post('/register', registerUser);
router.get('/fcount', getUserCount);
router.post('/join', joinWaitlist);
router.get('/count', getCount);

module.exports = router;