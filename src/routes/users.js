const express = require('express');
const authCallbackMiddleware = require('./middlewares/authCallbackMiddleware');
const createUserMiddleware = require('./middlewares/createUser');
const updateUserMiddleware = require('./middlewares/updateUser');
const deleteUserMiddleware = require('./middlewares/deleteUser');

const router = express.Router();

router.post('/', authCallbackMiddleware, createUserMiddleware);
router.put('/', authCallbackMiddleware, updateUserMiddleware);
router.delete('/', authCallbackMiddleware, deleteUserMiddleware);

module.exports = router;
