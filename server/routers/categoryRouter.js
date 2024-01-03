const router = require("express").Router();
const CategoryController = require("../controllers/categoryController.js");
const authentication = require("../middleware/authentication.js");

router.use(authentication);
router.get("/", CategoryController.getAll);
router.post("/add", CategoryController.create);

module.exports = router;
