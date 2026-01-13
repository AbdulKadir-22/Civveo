const express = require('express');
const router = express.Router();
const { registerUser, getUserCount } = require('../controllers/fetchittController');

router.post('/register', registerUser);
router.get('/fcount', getUserCount);

module.exports = router;