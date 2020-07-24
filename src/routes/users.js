const express = require('express');
const { check } = require('express-validator');
const createUserMiddleware = require('./middlewares/createUser');
const router = express.Router();

router.post('/', createUserMiddleware);

module.exports = router;
