const express = require('express');
const authCallbackMiddleware = require('./middlewares/authCallbackMiddleware');
const createIncomeOrExpenseMiddleware = require('./middlewares/createIncomeOrExpense');
const updateIncomeOrExpenseMiddleware = require('./middlewares/updateIncomeOrExpense');
const router = express.Router();

router.post('/', authCallbackMiddleware, createIncomeOrExpenseMiddleware);
router.put('/:id', authCallbackMiddleware, updateIncomeOrExpenseMiddleware);

module.exports = router;
