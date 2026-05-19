var express = require('express');
var router = express.Router();
const User = require('../models/user');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', authMiddleware, async (req, res) => {
    const users = await User.findAll();
    res.json(users);
});

module.exports = router;
