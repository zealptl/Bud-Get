const express = require('express');
const authCallbackMiddleware = require('./middlewares/authCallbackMiddleware');
const createIncomeOrExpenseMiddleware = require('./middlewares/createIncomeOrExpense');
const router = express.Router();

router.post('/', authCallbackMiddleware, createIncomeOrExpenseMiddleware);

module.exports = router;
