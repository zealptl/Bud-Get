const Joi = require('@hapi/joi');
const IncomeOrExpenseModel = require('../../models/incomeOrExpense');

const MIN = 0;
const MAX_DECIMALS = 2;

const validationSchema = Joi.object({
  amount: Joi.number().min(MIN).precision(MAX_DECIMALS).required(),
  description: Joi.string().required(),
  category: Joi.string().required(),
});

const validateData = async (req, res) => {
  try {
    const { amount, description, category } = req.body;
    const values = await validationSchema.validateAsync({
      amount,
      description,
      category,
    });

    return values;
  } catch (error) {
    console.error(error);
    res.status(400).json({
      msg:
        '"amount", "description", and "category" are only allowed and required fields.',
    });
  }
};

const updateIncomeOrExpenseMiddleware = async (req, res) => {
  const { amount, description, category } = await validateData(req, res);
  const { id } = req.params;

  try {
    const updatedIncomeOrExpense = await IncomeOrExpenseModel.findByIdAndUpdate(
      id,
      {
        $set: {
          amount,
          description,
          category,
          updatedOn: new Date(),
        },
      },
      { new: true }
    );

    if (!updatedIncomeOrExpense) {
      return res.status(404).json({ msg: 'Income or Expense not found' });
    }

    res.json({
      incomeOrExpense: {
        amount,
        description,
        category,
      },
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

module.exports = updateIncomeOrExpenseMiddleware;
