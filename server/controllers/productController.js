const { User } = require("../models");

class ProductController {
  static async getAllProduct(req, res, next) {
    try {
      const { email, password, fullName } = req.body;
      // let user = await User.create({
      //     email,
      //     password,
      //     fullName
      // })
      // if(!user) throw { msg: 'VALIDATION_ERROR'}
      res.status(201).json({
        msg: "get product success",
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

  static async getProductDetail(req, res, next) {
    try {
      const { email, password, fullName } = req.body;
      // let user = await User.create({
      //     email,
      //     password,
      //     fullName
      // })
      // if(!user) throw { msg: 'VALIDATION_ERROR'}
      res.status(201).json({
        msg: "get product detail success",
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

  static async addProduct(req, res, next) {
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
        msg: "add product success",
        // fullName: user.fullName,
        // access_token,
      });
    } catch (err) {
      next(err);
    }
  }

  static async updateProduct(req, res, next) {
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
        msg: "update product success",
        // fullName: user.fullName,
        // access_token,
      });
    } catch (err) {
      next(err);
    }
  }

  static async deleteProduct(req, res, next) {
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
        msg: "delete product success",
        // fullName: user.fullName,
        // access_token,
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = ProductController;
