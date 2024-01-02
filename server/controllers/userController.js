const { User } = require("../models");
const { comparePass } = require("../helpers/bcrypt");
const { generateToken } = require("../helpers/jwt");

class UserController {
  static async register(req, res, next) {
    try {
      const { email, password, fullName } = req.body;
      // let user = await User.create({
      //     email,
      //     password,
      //     fullName
      // })
      // if(!user) throw { msg: 'VALIDATION_ERROR'}
      res.status(201).json({
        msg: "Register success",
        // statusCode: 201,
        // id: user.id,
        // email: user.email,
        // fullName: user.fullName,
        // role: user.role,
      });
    } catch (err) {
      next(err);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      //   let user = await User.findOne({
      //     where: {
      //       email,
      //     },
      //   });
      //   if (!user) throw { name: "INVALID_EMAIL_OR_PASSWORD" };
      //   if (!comparePass(password, user.password))
      //     throw { name: "INVALID_EMAIL_OR_PASSWORD" };
      //   let payload = {
      //     id: user.id,
      //     email: user.email,
      //     role: user.role,
      //   };
      //   let access_token = generateToken(payload);
      res.status(200).json({
        msg: "login success",
        // fullName: user.fullName,
        // access_token,
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = UserController;
