const router = require("express").Router();
const CategoryController = require("../controllers/categoryController.js");

router.get("/", CategoryController.getAll);
router.post("/add", CategoryController.create);

module.exports = router;
