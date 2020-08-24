const Joi = require('@hapi/joi');
const TransactionsModel = require('../../models/transactions');

const validationSchema = Joi.object({
  type: Joi.string().valid('income', 'expense').required(),
  start: Joi.string().required(),
  end: Joi.string().required(),
  offset: Joi.number().required(),
  limit: Joi.number().required(),
});

const validateData = async (req, res) => {
  try {
    const values = await validationSchema.validateAsync(req.query);

    return values;
  } catch (error) {
    console.error(error);
    res.status(400).json({
      msg:
        '"type", "start", "end", "offset", and "limit" are the only allowed parameters.',
    });
  }
};

const getTransactionsMiddleware = async (req, res) => {
  const { type, start, end, offset, limit } = await validateData(req, res);

  const updateQuery = {
    [type]: {
      $elemMatch: {
        _updated_at: {
          $gte: start,
          $lt: end,
        },
      },
    },
  };

  try {
    const incomesOrExpenses = await TransactionsModel.find({ updateQuery })
      .skip(offset)
      .limit(limit);

    if (incomesOrExpenses.length < 1) {
      return res.status(404).json({ msg: 'Incomes or Expenses not found.' });
    }

    res.json(incomesOrExpenses);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

module.exports = getTransactionsMiddleware;
