const { verifyToken } = require("../helpers/jwt");
const { User } = require("../models");

async function authenthication(req, res, next) {
  try {
    const { access_token } = req.headers;
    if (!access_token) throw { msg: "AUTHENTICATION_FAILED" };
    const decoded = verifyToken(access_token);
    const user = await User.findOne({
      where: {
        username: decoded.username,
      },
    });
    if (!user) throw { msg: "AUTHENTICATION_FAILED" };
    req.loggedInUser = decoded;
    next();
  } catch (err) {
    next(err);
  }
}

module.exports = authenthication;
