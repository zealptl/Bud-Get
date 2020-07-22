const express = require('express');
const { check } = require('express-validator');
const createUserMiddleware = require('./middlewares/createUser');
const router = express.Router();

router.post(
  '/',
  [
    check('firstName', 'Please add a first name').not().isEmpty(),
    check('lastName', 'Please add a last name').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with six or more characters'
    ).isLength({ min: 6 }),
  ],
  createUserMiddleware
);

module.exports = router;
