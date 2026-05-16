var express = require('express');
var router = express.Router();

const userController = require('../controllers/UserController');

/* GET all users */
router.get('/', userController.findAllUsers);

/* GET user by id */
router.get('/:id', userController.findUserById);

/* CREATE user */
router.post('/', userController.createUser);

/* UPDATE user */
router.put('/:id', userController.updateUser);

/* DELETE user */
router.delete('/:id', userController.deleteUser);

module.exports = router;