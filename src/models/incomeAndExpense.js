const mongoose = require('mongoose');

const IncomeAndExpense = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserModel',
  },
  type: String,
  amount: Number,
  description: String,
  category: String,
  createdOn: {
    type: Date,
    default: Date.now,
  },
  updatedOn: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('IncomeModel', IncomeAndExpense);
