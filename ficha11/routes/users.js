var express = require('express');
var router = express.Router();
const User = require('../models/user');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', authMiddleware, async (req, res) => {
    const users = await User.findAll();
    res.json(users);
});

router.post('/', authMiddleware, async (req, res) => {
    const user = await User.create(req.body);
    res.json({
        message: "Utilizador criado com sucesso",
        user: user
    });
});

module.exports = router;
