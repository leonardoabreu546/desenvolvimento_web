const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

//Endpoints de Login e Signup
router.post('/signup', authController.signup);
router.post('/login', authController.login);

module.exports = router;