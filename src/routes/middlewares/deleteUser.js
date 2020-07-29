const UserModel = require('../../models/user');

const deleteUserMiddleware = async (req, res) => {
  try {
    const user = await UserModel.findById(req.user.id);

    if (!user) return res.status(404).json({ msg: 'User not found' });

    if (req.user.id !== user.id)
      return res.status(401).json({ msg: 'Not authorized' });

    await UserModel.findByIdAndDelete(req.user.id);

    res.json({
      id: user.id,
      email: user.email,
      msg: 'Account successfully deleted',
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};

module.exports = deleteUserMiddleware;
