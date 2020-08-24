const mongoose = require('mongoose');

const Transactions = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserModel',
  },
  incomes: [
    {
      amount: Number,
      description: String,
      category: String,
      _created_at: {
        type: Date,
        default: Date.now,
      },
      _updated_at: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  expenses: [
    {
      amount: Number,
      description: String,
      category: String,
      _created_at: {
        type: Date,
        default: Date.now,
      },
      _updated_at: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  summary: {
    monthly: {
      income: { type: Number, default: 0 },
      expense: { type: Number, default: 0 },
      savings: { type: Number, default: 0 },
    },
    yearly: {
      income: { type: Number, default: 0 },
      expense: { type: Number, default: 0 },
      savings: { type: Number, default: 0 },
    },
  },
});

module.exports = mongoose.model('TransactionsModel', Transactions);
