const Joi = require('@hapi/joi');
const IncomeOrExpenseModel = require('../../models/incomeOrExpense');

const validationSchema = Joi.object({
  type: Joi.string().valid('income', 'expense').required(),
  time: Joi.string().valid('month', 'year').required(),
  offset: Joi.number().required(),
  limit: Joi.number().required(),
});

const validateData = async (req, res) => {
  try {
    const { type, time, offset, limit } = req.query;

    const values = await validationSchema.validateAsync({
      type,
      time,
      offset,
      limit,
    });

    return values;
  } catch (error) {
    console.error(error);
    res.status(400).json({
      msg:
        '"type", "time", "offset", and "limit" are the only allowed parameters.',
    });
  }
};

const getIncomeOrExpenseMiddleware = async (req, res) => {
  const { type, time, offset, limit } = await validateData(req, res);

  try {
    const date = new Date();
    let eq;

    if (time === 'month') {
      eq = [{ $month: '$updatedOn' }, date.getMonth() + 1];
    } else if (time === 'year') {
      eq = [{ $year: '$updatedOn' }, date.getFullYear()];
    }

    const incomesOrExpenses = await IncomeOrExpenseModel.find(
      {
        type,
        $expr: {
          $eq: eq,
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
