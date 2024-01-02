const router = require("express").Router();
const userRouter = require("./userRouter");
const categoryRouter = require("./categoryRouter");
const productRouter = require("./productRouter");

router.get("/", (req, res) => res.status(200).json({ msg: `get /` }));
router.use("/users", userRouter);
router.use("/products", productRouter);
router.use("/categories", categoryRouter);

module.exports = router;
