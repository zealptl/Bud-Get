const Joi = require('@hapi/joi');
const IncomeOrExpenseModel = require('../../models/incomeOrExpense');

const validationSchema = Joi.object({
  type: Joi.string().valid('income', 'expense').required(),
  start: Joi.string().required(),
  end: Joi.string().required(),
  offset: Joi.number().required(),
  limit: Joi.number().required(),
});

const validateData = async (req, res) => {
  try {
    const { type, start, end, offset, limit } = req.query;

    const values = await validationSchema.validateAsync({
      type,
      start,
      end,
      offset,
      limit,
    });

    return values;
  } catch (error) {
    console.error(error);
    res.status(400).json({
      msg:
        '"type", "start", "end", "offset", and "limit" are the only allowed parameters.',
    });
  }
};

const getIncomeOrExpenseMiddleware = async (req, res) => {
  const { type, start, end, offset, limit } = await validateData(req, res);

  try {
    const incomesOrExpenses = await IncomeOrExpenseModel.find(
      {
        type,
        updatedOn: {
          $gte: start,
          $lt: end,
        },
      },
      {
        _id: 1,
        type: 1,
        amount: 1,
        description: 1,
        category: 1,
      }
    )
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

module.exports = getIncomeOrExpenseMiddleware;
