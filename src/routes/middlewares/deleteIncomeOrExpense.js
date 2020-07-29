const IncomeOrExpenseModel = require('../../models/incomeOrExpense');

const deleteIncomeOrExpenseMiddleware = async (req, res) => {
  try {
    const incomeOrExpense = await IncomeOrExpenseModel.findById(req.params.id);

    if (!incomeOrExpense)
      return res.status(404).json({ msg: 'Income Or Expense not found' });

    if (incomeOrExpense.user.toString() !== req.user.id)
      return res.status(401).json({ msg: 'Not authorized' });

    await IncomeOrExpenseModel.findByIdAndDelete(req.params.id);

    res.json({ msg: 'Income Or Expense removed successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Sever Error');
  }
};

module.exports = deleteIncomeOrExpenseMiddleware;
