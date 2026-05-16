const Loan = require('../sequelize').Loan
const User = require('../sequelize').User
const Book = require('../sequelize').Book

// GET ALL
exports.findAllLoans = function (req, res, next) {
    Loan.findAll({ include: [User, Book] }).then(results => {
        res.send(results); // ✅ corrigido
    });
}

// GET BY ID
exports.findLoanById = function (req, res) {
    Loan.findByPk(req.params.id).then(result => {
        res.send(result);
    });
}

// CREATE
exports.createLoan = function (req, res) {
    Loan.create(req.body).then(result => {
        res.send(result);
    });
}

// UPDATE
exports.updateLoan = function (req, res) {
    Loan.update(req.body, {
        where: { loan_id: req.params.id }
    }).then(result => {
        res.send(result);
    });
}

// DELETE
exports.deleteLoan = function (req, res) {
    Loan.destroy({
        where: { loan_id: req.params.id }
    }).then(result => {
        res.send({ message: "Deleted" });
    });
}