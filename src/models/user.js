const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

const UserSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  transactions: {
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
  createdOn: {
    type: Date,
    default: Date.now,
  },
  updatedOn: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('userModel', UserSchema);
