const express = require('express');
const { check } = require('express-validator');

const authCallbackMiddleware = require('./middlewares/authCallbackMiddleware');
const getLoggedInUserMiddleware = require('./middlewares/getLoggedInUser');
const authUserMiddleware = require('./middlewares/authUser');

const router = express.Router();

router.get('/', authCallbackMiddleware, getLoggedInUserMiddleware);
router.post(
  '/',
  [
    check('email', 'Please include a valid Email').isEmail(),
    check('password', 'Password is required').exists(),
  ],
  authUserMiddleware
);
module.exports = router;
