const { Op } = require("sequelize");
const { Product, Category } = require("../models");

function flattenProductCategoryName(product) {
  const newProduct = { ...product };
  newProduct.categoryName = product.Category.categoryName;
  delete newProduct.Category;
  return newProduct;
}

class ProductController {
  static async getAllProduct(req, res, next) {
    try {
      const { page, limit, keyword } = req.query;
      const { count, rows: products } = await Product.findAndCountAll({
        include: Category,
        where: {
          name: {
            [Op.like]: `%${keyword ?? ""}%`,
          },
        },
        offset: page ? (page - 1) * 10 : 0,
        limit: limit ?? 10,
        order: [["updatedAt", "DESC"]],
      });
      if (!products) throw { msg: "PRODUCTS_NOT_FOUND" };
      const newProducts = products.map((product) => {
        const newProduct = product.get({ plain: true });
        return flattenProductCategoryName(newProduct);
      });
      res.status(200).json({
        msg: "get product success",
        products: newProducts,
        totalPage: Math.ceil(count / (limit ?? 10)),
      });
    } catch (err) {
      next(err);
    }
  }

  static async getProductDetail(req, res, next) {
    try {
      const { id } = req.params;
      const product = await Product.findOne({
        where: { id },
        include: Category,
      });
      if (!product) throw { msg: "PRODUCT_NOT_FOUND" };
      const newProduct = product.get({
        plain: true,
      });
      const flattenProduct = flattenProductCategoryName(newProduct);
      res.status(200).json({
        msg: "get product detail success",
        product: flattenProduct,
      });
    } catch (err) {
      next(err);
    }
  }

  static async addProduct(req, res, next) {
    try {
      const {
        name,
        sku,
        description,
        weight,
        width,
        height,
        length,
        image,
        harga,
        categoryId,
      } = req.body;
      const product = await Product.create({
        name,
        sku,
        description,
        width,
        weight,
        height,
        length,
        image,
        harga,
        categoryId,
      });
      if (!product) throw { msg: "VALIDATION_ERROR" };
      res.status(200).json({
        msg: "Product add is success",
        product,
      });
    } catch (err) {
      next(err);
    }
  }

  static async updateProduct(req, res, next) {
    try {
      const { id } = req.params;
      let product = await Product.findOne({
        where: {
          id,
        },
      });
      if (!product) throw { msg: "PRODUCT_NOT_FOUND" };
      const {
        name,
        sku,
        description,
        weight,
        width,
        height,
        length,
        image,
        harga,
        categoryId,
      } = req.body;
      product = await Product.update(
        {
          name,
          sku,
          description,
          weight,
          width,
          height,
          length,
          image,
          harga,
          categoryId,
        },
        {
          where: { id },
          returning: true,
        }
      );
      if (!product) throw { msg: "VALIDATION_ERROR" };
      res.status(200).json({
        msg: "update product success",
        product,
      });
    } catch (err) {
      next(err);
    }
  }

  static async deleteProduct(req, res, next) {
    try {
      const { id } = req.params;
      let product = await Product.findOne({
        where: {
          id,
        },
      });
      if (!product) throw { msg: "PRODUCT_NOT_FOUND" };
      product = await Product.destroy({
        where: {
          id: product.id,
        },
      });
      res.status(200).json({ msg: "Product has been deleted" });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = ProductController;
