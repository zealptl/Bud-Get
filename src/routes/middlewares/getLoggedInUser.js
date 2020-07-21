const UserModel = require('../../models/user');

const getLoggedInUserMiddleware = async (req, res) => {
  try {
    const user = await UserModel.findById(req.user.id).select('-password');
    res.json({ user });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

module.exports = getLoggedInUserMiddleware;
