const Joi = require('@hapi/joi');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const UserModel = require('../../models/user');

const validationSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  oldEmail: Joi.string().email().required(),
  newEmail: Joi.string().email().required(),
  oldPassword: Joi.string().min(6),
  newPassword: Joi.string().min(6),
});

const validateData = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      oldEmail,
      newEmail,
      oldPassword,
      newPassword,
    } = req.body;

    const values = await validationSchema.validateAsync({
      firstName,
      lastName,
      oldEmail,
      newEmail,
      oldPassword,
      newPassword,
    });

    return values;
  } catch (error) {
    console.error(error);
    res.status(400).json({
      msg:
        '"firstName", "lastName", "oldEmail", "newEmail", "oldPassword", "newPassword" are only allowed and required fields.',
    });
  }
};

const updateUserMiddleware = async (req, res) => {
  let {
    firstName,
    lastName,
    oldEmail,
    newEmail,
    oldPassword,
    newPassword,
  } = await validateData(req, res);

  try {
    const salt = await bcrypt.genSalt(10);
    newPassword = await bcrypt.hash(newPassword, salt);

    const updatedUser = await UserModel.findOneAndUpdate(
      { email: oldEmail },
      {
        $set: {
          firstName,
          lastName,
          email: newEmail,
          password: newPassword,
        },
      }
    );

    if (!updatedUser) return res.status(404).json({ msg: 'User not found' });

    const payload = {
      user: {
        id: updatedUser.id,
      },
    };

    jwt.sign(
      payload,
      config.get('jwtSecret'),
      { expiresIn: 3600000 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};

module.exports = updateUserMiddleware;
