const { User } = require("../models");
const { comparePass } = require("../helpers/bcrypt");
const { generateToken } = require("../helpers/jwt");

class UserController {
  static async register(req, res, next) {
    try {
      const { username, password, fullName } = req.body;
      let user = await User.create({
        username,
        password,
        fullName,
      });
      if (!user) throw { msg: "VALIDATION_ERROR" };
      res.status(201).json({
        msg: "Register success",
        id: user.id,
        username: user.username,
        fullName: user.fullName,
      });
    } catch (err) {
      next(err);
    }
  }

  static async login(req, res, next) {
    try {
      const { username, password } = req.body;
      let user = await User.findOne({
        where: {
          username,
        },
      });
      if (!user) throw { name: "INVALID_EMAIL_OR_PASSWORD" };
      if (!comparePass(password, user.password)) {
        throw { name: "INVALID_EMAIL_OR_PASSWORD" };
      }
      let payload = {
        id: user.id,
        username: user.username,
      };
      let access_token = generateToken(payload);
      res.status(200).json({
        msg: "login success",
        fullName: user.fullName,
        access_token,
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = UserController;
