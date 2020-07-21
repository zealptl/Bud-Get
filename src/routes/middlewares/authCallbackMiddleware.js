const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = (res, req, next) => {
  const token = req.header('x-auth-token');

  if (!token)
    return res.status(401).json({ msg: 'No token. Authorization denied...' });

  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));
    req.user = decoded.user;
  } catch (error) {
    res.status(401).json({ msg: 'Token is not valid.' });
  }
};
