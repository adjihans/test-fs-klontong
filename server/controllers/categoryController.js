const { Category } = require("../models");

class CategoryController {
  static async create(req, res, next) {
    try {
      const { categoryName } = req.body;
      const category = await Category.create({
        categoryName,
      });
      if (!category) throw { msg: "VALIDATION_ERROR" };
      res.status(201).json({
        msg: "create category success",
        category,
      });
    } catch (err) {
      next(err);
    }
  }

  static async getAll(req, res, next) {
    try {
      const categories = await Category.findAll();
      if (!categories) throw { name: "CATEGORY_NOT_FOUND" };
      res.status(200).json({
        msg: "get all category success",
        categories: categories,
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = CategoryController;
