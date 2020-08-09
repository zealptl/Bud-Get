const express = require('express');

const authCallbackMiddleware = require('./middlewares/authCallbackMiddleware');
const getLoggedInUserMiddleware = require('./middlewares/getLoggedInUser');
const authUserMiddleware = require('./middlewares/authUser');

const router = express.Router();

router.get('/', authCallbackMiddleware, getLoggedInUserMiddleware);
router.post('/', authUserMiddleware);
module.exports = router;
