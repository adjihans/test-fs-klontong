const jwt = require("jsonwebtoken");

function generateToken(payload) {
  return jwt.sign(payload, "shhhh");
}

function verifyToken(token) {
  return jwt.verify(token, "shhhh");
}

module.exports = {
  generateToken,
  verifyToken,
};
