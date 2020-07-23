const Joi = require('@hapi/joi');
const IncomeOrExpenseModel = require('../../models/incomeOrExpense');

const MIN_PRICE = 0;
const MAX_DECIMALS = 2;

const validationSchema = Joi.object({
  type: Joi.bool(),
  amount: Joi.number().min(MIN_PRICE).precision(MAX_DECIMALS).required(),
  description: Joi.string().required(),
  category: Joi.string().required(),
});

const validateData = async (req, res) => {
  try {
    const { type, amount, description, category } = req.body;

    const values = await validationSchema.validateAsync({
      type,
      amount,
      description,
      category,
    });

    return values;
  } catch (error) {
    console.error(error);
    res
      .status(400)
      .json({
        msg:
          '"type", "amount", "description", and "category" are only allowed and required fields.',
      });
  }
};

const createIncomeOrExpenseMiddleware = async (req, res) => {
  const values = await validateData(req, res);
  const { type, amount, description, category } = values;
  try {
    const newIncomeOrExpense = new IncomeOrExpenseModel({
      user: req.user.id,
      type,
      amount,
      description,
      category,
    });

    const incomeOrExpense = await newIncomeOrExpense.save();

    res.json({ incomeOrExpense });
  } catch (error) {
    console.error(error);
    res.status(400).send('Server Error');
  }
};

module.exports = createIncomeOrExpenseMiddleware;
