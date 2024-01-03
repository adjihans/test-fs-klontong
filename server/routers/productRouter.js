const router = require("express").Router();
const ProductController = require("../controllers/productController");

router.get("/", ProductController.getAllProduct);
router.get("/:id", ProductController.getProductDetail);
router.post("/add", ProductController.addProduct);
router.put("/update/:id", ProductController.updateProduct);
router.delete("/delete/:id", ProductController.deleteProduct);

module.exports = router;
