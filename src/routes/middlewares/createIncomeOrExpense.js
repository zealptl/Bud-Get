const Joi = require('@hapi/joi');
const IncomeOrExpenseModel = require('../../models/incomeOrExpense');

const MIN = 0;
const MAX_DECIMALS = 2;

const validationSchema = Joi.object({
  type: Joi.string().valid('income', 'expense'),
  amount: Joi.number().min(MIN).precision(MAX_DECIMALS).required(),
  description: Joi.string().required(),
  category: Joi.string().required(),
});

const validateData = async (req, res) => {
  try {
    const values = await validationSchema.validateAsync(req.body);

    return values;
  } catch (error) {
    console.error(error);
    res.status(400).json({
      msg:
        '"type", "amount", "description", and "category" are only allowed and required fields.',
    });
  }
};

const createIncomeOrExpenseMiddleware = async (req, res) => {
  const { type, amount, description, category } = await validateData(req, res);
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
    res.status(500).send('Server Error');
  }
};

module.exports = createIncomeOrExpenseMiddleware;
