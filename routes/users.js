const router = require("express").Router();
const userController = require("../controllers/usersControllers");

//Protected routes
const { verifyToken } = require("../middleware/verifyToken");

router.get("/", verifyToken, userController.getUser);
router.delete("/", verifyToken, userController.deletUser);

module.exports = router;
