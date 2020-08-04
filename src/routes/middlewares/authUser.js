const Joi = require('@hapi/joi');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const UserModel = require('../../models/user');

const validationSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const validateData = async (req, res) => {
  try {
    const values = await validationSchema.validateAsync(req.body);

    return values;
  } catch (error) {
    console.error(error);
    res.status(400).json({
      msg: '"email" and "password" are only allowed and required fields.',
    });
  }
};

const authUserMiddleware = async (req, res) => {
  const { email, password } = await validateData(req, res);
  try {
    const user = await UserModel.findOne({ email });

    if (!user) return res.status(404).json({ msg: 'Acount not found' });

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
