const Joi = require('@hapi/joi');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const UserModel = require('../../models/user');
const { valid } = require('@hapi/joi');

const validationSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const validateData = async (req, res) => {
  try {
    const { email, password } = req.body;

    const values = await validationSchema.validateAsync({
      email,
      password,
    });

    return values;
  } catch (error) {
    console.error(error);
    res.status(400).json({
      msg: '"email" and "password" are only allowed and required fields.',
    });
  }
};

const authUserMiddleware = async (req, res) => {
  const values = await validateData(req, res);
  const { email, password } = values;
  try {
    const user = await UserModel.findOne({ email });

    if (!user) return res.status(400).json({ msg: 'Invalid Credentials' });

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) return res.status(400).json({ msg: 'Invalid Credentials' });

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
    res.send('Server Error');
  }
};

module.exports = authUserMiddleware;
