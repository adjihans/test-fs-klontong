const router = require("express").Router();
const ProductController = require("../controllers/productController");
const authentication = require("../middleware/authentication");

router.get("/", ProductController.getAllProduct);
router.get("/:id", ProductController.getProductDetail);
router.use(authentication);
router.post("/add", ProductController.addProduct);
router.put("/update/:id", ProductController.updateProduct);
router.delete("/delete/:id", ProductController.deleteProduct);

module.exports = router;
