const router = require("express").Router();
const cartControllers = require("../controllers/cartControllers");
const { verifyToken } = require("../middleware/verifyToken");

router.post("/", verifyToken, cartControllers.addToCart);
router.get("/find", verifyToken, cartControllers.getCart);
router.delete("/:cartItem", verifyToken, cartControllers.deleteCartItem);

module.exports = router;
