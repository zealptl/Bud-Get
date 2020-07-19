const Koa = require('koa');
const router = require('./routes');
const connectDB = require('../config/db');

const app = new Koa();

connectDB();

app.use(router.routes());

const PORT = 5000;

app.listen(PORT);
