var express = require('express');
var router = express.Router();

const BookController = require('../controllers/BookController');

/* GET all books */
router.get('/', BookController.findAllBooks);

/* CREATE book */
router.post('/', BookController.createBook);

/* UPDATE book */
router.put('/:id', BookController.updateBook);

/* DELETE book */
router.delete('/:id', BookController.deleteBook);

module.exports = router;