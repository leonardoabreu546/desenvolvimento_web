const Book = require('../sequelize').Book;

// GET ALL
exports.findAllBooks = function (req, res) {
    Book.findAll().then(result => res.send(result));
};

// CREATE
exports.createBook = function (req, res) {
    Book.create(req.body).then(result => res.send(result));
};

// UPDATE
exports.updateBook = function (req, res) {
    Book.update(req.body, {
        where: { book_id: req.params.id }
    }).then(result => res.send(result));
};

// DELETE
exports.deleteBook = function (req, res) {
    Book.destroy({
        where: { book_id: req.params.id }
    }).then(result => res.send({ message: "Deleted successfully" }));
};