const router = require("express").Router();
const CategoryController = require("../controllers/categoryController.js");

router.get("/", CategoryController.getAll);
router.post("/", CategoryController.create);

module.exports = router;