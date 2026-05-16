var express = require('express');
var router = express.Router();

const loanController = require('../controllers/LoanController');

router.get('/', loanController.findAllLoans);
router.get('/:id', loanController.findLoanById);
router.post('/', loanController.createLoan);
router.put('/:id', loanController.updateLoan);
router.delete('/:id', loanController.deleteLoan);

module.exports = router;