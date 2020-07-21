const express = require('express');
const connectDB = require('../config/db');

const app = express();

connectDB();

app.use(express.json({ extended: false }));

// app.use('/api/auth', require('./routes/auth'));
// app.use('/api/users', require('./routes/users'));
// app.use('/api/incomeOrExpense', require('./routes/incomeOrExpense'));
// app.use('/api/userIncomeAndExpense', require('./routes/userIncomeAndExpense'));

const PORT = 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
