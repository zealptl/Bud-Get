const mongoose = require('mongoose');

const UserIncomeAndExpenseSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserModel',
  },
  monthlyIncome: {
    amount: number,
    month: {
      type: Date,
      default: Date.now,
    },
  },
  monthlyExpense: {
    amount: number,
    month: {
      type: Date,
      default: Date.now,
    },
  },
  yearlyIncome: {
    monthly: [
      {
        amount: number,
        month: Date,
      },
    ],
    year: {
      type: Date,
      default: Date.now,
    },
  },
  yearlyExpense: {
    monthly: [
      {
        amount: number,
        month: Date,
      },
    ],
    year: {
      type: Date,
      default: Date.now,
    },
  },
});

module.exports = mongoose.model(
  'UserIncomeAndExpenseModel',
  UserIncomeAndExpenseSchema
);
