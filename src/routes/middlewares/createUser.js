const Joi = require('@hapi/joi');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const UserModel = require('../../models/user');

const validationSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6),
});

const validateData = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    const values = await validationSchema.validateAsync({
      firstName,
      lastName,
      email,
      password,
    });

    return values;
  } catch (error) {
    console.error(error);
    res.status(400).json({
      msg:
        '"firstName", "lastName", "email", and "password" are only allowed and required fields.',
    });
  }
};

const createUserMiddleware = async (req, res) => {
  const values = await validateData(req, res);
  const { firstName, lastName, email, password } = values;

  try {
    let user = await UserModel.findOne({ email });

    if (user) return res.status(400).json({ msg: 'User already exists' });

    user = new UserModel({ firstName, lastName, email, password });

    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(password, salt);

    await user.save();

    const payload = {
      user: {
        id: user.id,
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

module.exports = createUserMiddleware;
