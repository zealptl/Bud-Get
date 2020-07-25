const mongoose = require('mongoose');

const UserTransactionsSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserModel',
  },
  monthlyIncome: {
    daily: [
      {
        amount: number,
        day: Date,
      },
    ],
    month: Date,
  },
  monthlyExpense: {
    daily: [
      {
        amount: number,
        day: Date,
      },
    ],
    month: Date,
  },
  monthlySavings: {
    amount: number,
    month: Date,
  },
  yearlyIncome: {
    monthly: [
      {
        amount: number,
        month: Date,
      },
    ],
    year: Date,
  },
  yearlyExpense: {
    monthly: [
      {
        amount: number,
        month: Date,
      },
    ],
    year: Date,
  },
  yearlySavings: {
    monthly: [
      {
        amount: number,
        month: Date,
      },
    ],
    year: Date,
  },
});

module.exports = mongoose.model(
  'UserTransactionsModel',
  UserTransactionsSchema
);
