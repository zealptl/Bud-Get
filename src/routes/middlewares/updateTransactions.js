const Joi = require('@hapi/joi');
const UserModel = require('../../models/user');

const validationSchema = Joi.object({
  type: Joi.string().valid('income', 'expense').required(),
  time: Joi.string().valid('monthly', 'yearly'),
  amount: Joi.number().required(),
});

const validateData = async (req, res) => {
  try {
    const { type, time, amount } = req.body;
    const values = await validationSchema.validateAsync({ type, time, amount });

    return values;
  } catch (error) {
    console.error(error);
    res
      .status(400)
      .json({ msg: '"type" and "amount" are only allowed fields.' });
  }
};

const updateUserTransactionsMiddleware = async (req, res) => {
  const { type, time, amount } = await validateData(req, res);
  const { id } = req.user;
  try {
    const user = await UserModel.findById(id);

    const newTransactions = user.transactions;
    newTransactions[time][type] += amount;

    if (type === 'income') {
      newTransactions[time].savings += amount;
    } else {
      newTransactions[time].savings -= amount;
    }

    const updatedUser = await UserModel.findByIdAndUpdate(
      id,
      {
        $set: {
          transactions: newTransactions,
        },
      },
      { new: true }
    );

    req.user = updatedUser;
    res.json({
      user: updatedUser,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

module.exports = updateUserTransactionsMiddleware;
