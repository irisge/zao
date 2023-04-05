const { findByEmail } = require('../models/user.model');
const { encodeJWT } = require('../helpers/jwt.helper');
const { verifyPassword } = require('../helpers/argon.helper');
const { validateAuth } = require('../validators/authValidator');

const login = async (req, res, next) => {
  try {
    const errors = validateAuth(req.body);
    
    if (errors) throw new Error();

    const [user] = await findByEmail(req.body.email);

    if (!user) throw new Error('Invalid credentials');

    const passwordVerfication = await verifyPassword(
      user.password,
      req.body.password
    );

    if (!passwordVerfication) {
      throw new Error('Invalid password');
    }

    delete user.password;

    const token = encodeJWT(user);

    // Warning: secure should be true for production

    res
      .cookie('aabs', token, { httpOnly: true, secure: false })
      .status(200)
      .json({ userId: user.id });
  } catch (e) {
    next(e);
  }
};

const logout = async (req, res) => {
  res.clearCookie('aabs').sendStatus(200);
};

module.exports = { login, logout };
